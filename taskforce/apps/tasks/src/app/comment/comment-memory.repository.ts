import {CommentRepository} from '@taskforce/core';
import {CommentEntity} from './comment.entity';
import {Comment} from '@taskforce/shared-types';
import * as crypto from 'crypto';

export class CommentMemoryRepository implements CommentRepository<CommentEntity, string, Comment> {
  private repository: { [key: string]: Comment } = {};

  public async create(item: CommentEntity): Promise<Comment> {
    const entry = {...item.toObject(), _id: crypto.randomUUID()};
    this.repository[entry._id] = entry;
    return {...entry};
  }

  public async findByTaskId(id: string): Promise<Comment[]> | null {
    return Object.values(this.repository).filter((commentItem) => commentItem.taskId === id);
  }

  public async destroy(id: string): Promise<void> | null {
    delete this.repository[id];
  }
}
