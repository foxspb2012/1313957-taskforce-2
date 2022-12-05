import {Injectable} from '@nestjs/common';
import {CreateTaskDto} from './dto/create-task.dto';
import {UpdateTaskDto} from './dto/update-task.dto';
import {Task} from '@taskforce/shared-types';
import dayjs = require('dayjs');
import {TaskMemoryRepository} from './task-memory.repository';
import {TaskEntity} from './task.entity';

@Injectable()
export class TaskService {
  constructor(
    private readonly taskMemoryRepository: TaskMemoryRepository
  ) {
  }

  public async createTask(dto: CreateTaskDto) {
    const {
      title,
      description,
      category,
      author,
      creationDate,
      status,
      price,
      dueDate,
      picture,
      address,
      tags,
    } = dto;

    const task: Task = {
      _id: '',
      title,
      description,
      category,
      author,
      creationDate: dayjs(creationDate).toDate(),
      status,
      price,
      dueDate,
      picture,
      address,
      tags,
    }

    const taskEntity = new TaskEntity(task);

    return this.taskMemoryRepository.create(taskEntity);
  }

  public async getTask(id: string): Promise<Task> | null {
    return await this.taskMemoryRepository.findById(id);
  }

  public async getByCategory(category: string): Promise<Task[]> | null {
    return await this.taskMemoryRepository.findByCategory(category);
  }

  public async updateTask(id: string, dto: UpdateTaskDto): Promise<Task> | null {
    return await this.taskMemoryRepository.update(id, dto);
  }

  public async deleteTask(id: string): Promise<void> | null {
    return await this.taskMemoryRepository.destroy(id);
  }
}

