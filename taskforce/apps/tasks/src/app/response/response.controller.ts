import {Body, Controller, Get, HttpStatus, Post, Query} from '@nestjs/common';
import {ApiQuery, ApiResponse, ApiTags} from '@nestjs/swagger';
import {ResponseService} from './response.service';
import {CreateResponseDto} from './dto/create-response';
import {ResponseRdo} from './rdo/response.rdo';
import {ResponseQuery} from './query/response.query';
import {fillObject} from '@taskforce/core';

@ApiTags('response')
@Controller('response')
export class ResponseController {
  constructor(
    private readonly responseService: ResponseService
  ) {
  }

  @Post('/')
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The new response has been successfully created',
    type: ResponseRdo,
  })
  public async create(@Body() dto: CreateResponseDto) {
    const newResponse = await this.responseService.createResponse(dto);
    return fillObject(ResponseRdo, newResponse);
  }

  @Get('/')
  @ApiQuery({name: 'taskId'})
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Response by the taskId',
    type: [ResponseRdo],
  })
  public async getById(@Query() {taskId}: ResponseQuery) {
    const responses = await this.responseService.getByTaskId(taskId);
    if (!responses) {
      throw new Error('Responses by task id not found');
    }
    return fillObject(ResponseRdo, responses);
  }
}
