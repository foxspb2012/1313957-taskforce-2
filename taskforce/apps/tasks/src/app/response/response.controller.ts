import {Body, Controller, Get, HttpStatus, Post, Query} from '@nestjs/common';
import {ApiQuery, ApiResponse, ApiTags} from '@nestjs/swagger';
import {ResponseService} from './response.service';
import {CreateResponseDto} from './dto/create-response';
import {ResponseRdo} from './rdo/response.rdo';
import {fillObject} from '@taskforce/core';

@ApiTags('response')
@Controller('response')
export class ResponseController {
  constructor(
    private readonly responseService: ResponseService
  ) {
  }

  @Post('')
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The new response has been successfully created',
    type: ResponseRdo,
  })
  public async create(@Body() dto: CreateResponseDto) {
    const newResponse = await this.responseService.create(dto);
    return fillObject(ResponseRdo, newResponse);
  }

  @Get('')
  @ApiQuery({name: 'taskId'})
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Response by the taskId',
    type: [ResponseRdo],
  })
  public async getById(@Query() {taskId}) {
    const reviews = await this.responseService.getByTaskId(taskId);
    if (!reviews) {
      throw new Error('Reviews by task id not found');
    }
    return fillObject(ResponseRdo, reviews);
  }
}
