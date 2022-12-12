import {ReviewRepository} from '@taskforce/core';
import {ReviewEntity} from './review.entity';
import {Review} from '@taskforce/shared-types';
import * as crypto from 'crypto';

export class ReviewMemoryRepository implements ReviewRepository<ReviewEntity, string, Review> {
  private repository: { [key: string]: Review } = {};

  public async create(item: ReviewEntity): Promise<Review> {
    const entry = {...item.toObject(), _id: crypto.randomUUID()};
    this.repository[entry._id] = entry;
    return {...entry};
  }

  public async findByTaskId(id: string): Promise<Review[]> | null {
    return Object.values(this.repository).filter((reviewItem) => reviewItem.taskId === id);
  }
}
