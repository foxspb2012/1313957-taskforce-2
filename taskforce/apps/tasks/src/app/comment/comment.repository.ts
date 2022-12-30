import {CRUDRepository} from '@taskforce/core';
import {PrismaService} from '../prisma/prisma.service';
import {CommentEntity} from './comment.entity';
import {Comment} from '@taskforce/shared-types';
import {Injectable} from '@nestjs/common/decorators';

@Injectable()
export class CommentRepository
  implements CRUDRepository<CommentEntity, number, Comment> {
  constructor(private readonly prisma: PrismaService) {
  }

  public async getByTaskId(taskId: number): Promise<Comment[]> {
    return await this.prisma.comment.findMany({
      where: {
        taskId
      }
    });
  }

  public async create(item: CommentEntity): Promise<Comment> {
    return await this.prisma.comment.create({
      data: {
        ...item.toObject()
      }
    });
  }

  public findById(id: number): Promise<Comment> {
    return Promise.resolve(undefined);
  }

  public update(id: number, item: CommentEntity): Promise<Comment> {
    return Promise.resolve(undefined);
  }

  public async destroy(id: number): Promise<void> {
    await this.prisma.comment.delete({
      where: {
        id,
      }
    });
  }
}
