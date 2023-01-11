import {Injectable} from '@nestjs/common';
import {Response} from '@taskforce/shared-types';
import {ResponseEntity} from './response.entity';
import {CreateResponseDto} from './dto/create-response';
import {ResponseRepository} from './response.repository';

@Injectable()
export class ResponseService {
  constructor(
    private readonly responseRepository: ResponseRepository
  ) {
  }
  public async createResponse(dto: CreateResponseDto): Promise<Response> {
    const response = new ResponseEntity(dto);
    return await this.responseRepository.create(response);
  }
  public async getByTaskId(taskId: number): Promise<Response[]> {
    return await this.responseRepository.findByTaskId(taskId);
  }
}

