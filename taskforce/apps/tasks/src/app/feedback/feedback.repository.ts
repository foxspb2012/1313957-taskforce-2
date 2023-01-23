import {CRUDRepository} from '@taskforce/core';
import {Feedback} from '@taskforce/shared-types';
import {FeedbackEntity} from './feedback.entity';
import {PrismaService} from '../prisma/prisma.service';
import {Injectable} from '@nestjs/common';

@Injectable()
export class FeedbackRepository
  implements CRUDRepository<FeedbackEntity, number, Feedback> {
  constructor(private readonly prisma: PrismaService) {
  }

  public async create(item: FeedbackEntity): Promise<Feedback> {
    return this.prisma.feedback.create({data: {...item.toObject()}});
  }

  public async destroy(id: number): Promise<void> {
    await this.prisma.feedback.delete({
      where: {id},
    });
  }

  public async findById(id: number): Promise<Feedback | null> {
    return this.prisma.feedback.findFirst({
      where: {id},
    });
  }

  public async findByTaskId(taskId: number): Promise<Feedback[]> {
    return this.prisma.feedback.findMany({
      where: {taskId},
    });
  }

  public async find(ids: number[] = []): Promise<Feedback[]> {
    return this.prisma.feedback.findMany({
      where: {
        id: {in: ids.length > 0 ? ids : undefined},
      },
    });
  }
}
