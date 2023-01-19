import {Injectable} from '@nestjs/common';
import {Task} from '@taskforce/shared-types';
import {CreateTaskDto} from './dto/create-task.dto';
import {UpdateTaskDto} from './dto/update-task.dto';
import {TaskEntity} from './task.entity';
import {TaskRepository} from './task.repository';
import {TaskQuery} from './query/task.query';

@Injectable()
export class TaskService {
  constructor(private readonly taskRepository: TaskRepository) {
  }

  public async getTask(id: number): Promise<Task> {
    return this.taskRepository.findById(id);
  }

  public async getTasks(query: TaskQuery): Promise<Task[]> {
    return await this.taskRepository.find(query);
  }

  public async createTask(dto: CreateTaskDto): Promise<Task> {
    const newTaskEntity = new TaskEntity(dto);
    return await this.taskRepository.create(newTaskEntity);
  }

  public async updateTask(id: number, dto: UpdateTaskDto): Promise<Task> {
    const updatedTaskEntity = new TaskEntity(dto);
    return await this.taskRepository.update(id, updatedTaskEntity);
  }

  public async deleteTask(id: number): Promise<void> {
    await this.taskRepository.destroy(id);
  }
}

