import {Controller} from '@nestjs/common';
import {EventPattern} from '@nestjs/microservices';
import {CommandEvent} from '@taskforce/shared-types';
import {SaveTaskFileDto} from '../work-task/dto';
import {FileService} from './file.service';

@Controller()
export class FileController {
  constructor(private readonly taskFileService: FileService) {
  }

  @EventPattern({cmd: CommandEvent.SaveTaskFile})
  public async saveTaskFile(dto: SaveTaskFileDto) {
    await this.taskFileService.create(dto);
  }
}
