import {Injectable} from '@nestjs/common/decorators';
import {Prisma} from '@prisma/client';
import {CRUDRepository} from '@taskforce/core';
import {Feedback} from '@taskforce/shared-types';
import {PrismaService} from '../prisma/prisma.service';
import {FeedbackEntity} from './feedback.entity';

@Injectable()
export class FeedbackRepository
  implements CRUDRepository<FeedbackEntity, number, Feedback> {
  constructor(private readonly prisma: PrismaService) {
  }
  public async findByUserId(userId: string): Promise<Feedback[]> {
    const feedbacks = await this.prisma.feedback.findMany({
      where: {userId},
    });

    return feedbacks.map((feedback) => ({
      ...feedback,
      score: Number(feedback.score),
    }));
  }

  public async create(item: FeedbackEntity): Promise<Feedback> {
    const newFeedback = await this.prisma.feedback.create({
      data: {
        text: item.text,
        userId: item.userId,
        score: item.score && new Prisma.Decimal(item.score),
        taskId: item.taskId,
      },
    });

    return {...newFeedback, score: Number(newFeedback.score)};
  }

  public findById(id: number): Promise<Feedback> {
    return Promise.resolve(undefined);
  }

  public update(id: number, entity: FeedbackEntity): Promise<Feedback> {
    return Promise.resolve(undefined);
  }

  public destroy(id: number): Promise<void> {
    return Promise.resolve(undefined);
  }
}
