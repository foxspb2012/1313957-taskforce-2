import {CRUDRepository} from '@taskforce/core';
import {ResponseEntity} from './response.entity';
import {Response} from '@taskforce/shared-types';
import * as crypto from 'crypto';

export class ResponseMemoryRepository implements CRUDRepository<ResponseEntity, string, Response> {
  private repository: { [key: string]: Response } = {};

  public async create(item: ResponseEntity): Promise<Response> {
    const entry = {...item.toObject(), _id: crypto.randomUUID()};
    this.repository[entry._id] = entry;
    return {...entry};
  }

  public async findById(id: string): Promise<Response> | null {
    return Promise.resolve(undefined);
  }

  public async update(id: string, item: ResponseEntity): Promise<Response> {
    return Promise.resolve(undefined);
  }

  public async destroy(id: string): Promise<void> | null {
    delete this.repository[id];
  }

  public async findByTaskId(id: number): Promise<Response[]> | null {
    return Object.values(this.repository).filter((reviewItem) => reviewItem.taskId === id);
  }
}
