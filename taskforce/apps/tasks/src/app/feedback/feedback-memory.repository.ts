import {CRUDRepository} from '@taskforce/core';
import {FeedbackEntity} from './feedback.entity';
import {Feedback} from '@taskforce/shared-types';
import * as crypto from 'crypto';

export class FeedbackMemoryRepository implements CRUDRepository<FeedbackEntity, string, Feedback> {
  private repository: { [key: string]: Feedback } = {};

  public async create(item: FeedbackEntity): Promise<Feedback> {
    const entry = {...item.toObject(), _id: crypto.randomUUID()};
    this.repository[entry._id] = entry;
    return {...entry};
  }

  public async findById(id: string): Promise<Feedback> | null {
    return Promise.resolve(undefined);
  }

  public async update(id: string, item: FeedbackEntity): Promise<Feedback> {
    return Promise.resolve(undefined);
  }

  public async destroy(id: string): Promise<void> | null {
    delete this.repository[id];
  }

  public async findByTaskId(id: number): Promise<Feedback[]> | null {
    return Object.values(this.repository).filter((feedbackItem) => feedbackItem.taskId === id);
  }
}
