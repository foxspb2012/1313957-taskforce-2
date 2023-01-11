import {CRUDRepository} from '@taskforce/core';
import {TaskEntity} from "./task.entity";
import {Task} from "@taskforce/shared-types";
import * as crypto from 'crypto';

export class TaskMemoryRepository implements CRUDRepository<TaskEntity, string, Task> {
  private repository: { [key: string]: Task } = {};

  public async create(item: TaskEntity): Promise<Task> {
    const entry = {...item.toObject(), _id: crypto.randomUUID()};
    this.repository[entry._id] = entry;
    return {...entry};
  }

  public async findById(id: string): Promise<Task> {
    if (this.repository[id]) {
      return {...this.repository[id]};
    }

    return null;
  }

  public async update(
    id: string,
    entity: Partial<TaskEntity>
  ): Promise<Task> | null {

    const updatedTask = {...this.repository[id], ...entity};
    this.repository[id] = updatedTask;
    return {...updatedTask};
  }

  public async destroy(id: string): Promise<void> | null {
    delete this.repository[id];
  }
}
