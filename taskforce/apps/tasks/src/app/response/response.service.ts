import {Injectable} from '@nestjs/common';
import dayjs = require('dayjs');
import {ResponseEntity} from './respoonse.entity';
import {Response} from '@taskforce/shared-types';
import {CreateResponseDto} from './dto/create-response';
import {ResponseMemoryRepository} from './response-memory.repository';

@Injectable()
export class ResponseService {
  constructor(
    private readonly responseMemoryRepository: ResponseMemoryRepository
  ) {
  }

  public async create(dto: CreateResponseDto) {
    const {
      text,
      taskId,
      author,
      creationDate,
    } = dto;

    const response: Response = {
      _id: '',
      text,
      taskId,
      author,
      creationDate: dayjs(creationDate).toDate(),
    }

    const responseEntity = new ResponseEntity(response);

    return this.responseMemoryRepository.create(responseEntity);
  }

  public async getByTaskId(taskId: string): Promise<Response[]> | null {
    return await this.responseMemoryRepository.findByTaskId(taskId);
  }
}
