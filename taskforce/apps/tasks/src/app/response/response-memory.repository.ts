import {ReviewRepository} from '@taskforce/core';
import {ResponseEntity} from './respoonse.entity';
import {Response} from '@taskforce/shared-types';
import * as crypto from 'crypto';

export class ResponseMemoryRepository implements ReviewRepository<ResponseEntity, string, Response> {
  private repository: { [key: string]: Response } = {};

  public async create(item: ResponseEntity): Promise<Response> {
    const entry = {...item.toObject(), _id: crypto.randomUUID()};
    this.repository[entry._id] = entry;
    return {...entry};
  }

  public async findByTaskId(id: string): Promise<Response[]> | null {
    return Object.values(this.repository).filter((reviewItem) => reviewItem.taskId === id);
  }
}
