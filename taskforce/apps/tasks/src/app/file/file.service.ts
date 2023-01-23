import {Injectable} from '@nestjs/common';
import {SaveTaskFileDto} from '../work-task/dto';
import {FileRepository} from './file.repository';
import {WorkTaskRepository} from '../work-task/work-task.repository';
import {FileEntity} from './file.entity';

@Injectable()
export class FileService {
  constructor(
    private readonly taskFileRepository: FileRepository,
    private readonly workTaskRepository: WorkTaskRepository
  ) {
  }

  public async create(dto: SaveTaskFileDto) {
    const {taskId, userId, filename} = dto;

    const task = await this.workTaskRepository.findById(taskId);

    if (!task || task.clientId !== userId) {
      return null;
    }

    const fileEntity = new FileEntity({
      taskId,
      filename,
    });

    return this.taskFileRepository.create(fileEntity);
  }
}
