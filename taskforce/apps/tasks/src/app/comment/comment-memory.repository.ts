import {CRUDRepository} from '@taskforce/core';
import {CommentEntity} from './comment.entity';
import {Comment} from '@taskforce/shared-types';
import * as crypto from 'crypto';

export class CommentMemoryRepository implements CRUDRepository<CommentEntity, string, Comment> {
  private repository: { [key: string]: Comment } = {};

  public async create(item: CommentEntity): Promise<Comment> {
    const entry = {...item.toObject(), _id: crypto.randomUUID()};
    this.repository[entry._id] = entry;
    return {...entry};
  }

  public async findById(id: string): Promise<Comment> | null {
    return Promise.resolve(undefined);
  }

  public async update(id: string, item: CommentEntity): Promise<Comment> {
    return Promise.resolve(undefined);
  }

  public async destroy(id: string): Promise<void> | null {
    delete this.repository[id];
  }

  public async getByTaskId(id: number): Promise<Comment[]> | null {
    return Object.values(this.repository).filter(commentItem => commentItem.id === id);
  }
}
