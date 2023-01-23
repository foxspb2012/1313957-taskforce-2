import {Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post} from '@nestjs/common';
import {FeedbackService} from './feedback.service';
import {CreateFeedbackDto} from './dto/create-feedback.dto';
import {fillObject} from '@taskforce/core';
import {ReplyRdo} from './rdo/reply.rdo';
import {ApiResponse, ApiTags} from '@nestjs/swagger';

@ApiTags('feedback')
@Controller('feedback')
export class FeedbackController {
  constructor(
    private readonly feedbackService: FeedbackService
  ) {
  }

  @Post()
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'A new task reply is created'
  })
  public async create(@Body() dto: CreateFeedbackDto) {
    const reply = await this.feedbackService.create(dto);
    return fillObject(ReplyRdo, reply)
  }

  @Get(':id')
  @ApiResponse({
    type: ReplyRdo,
    status: HttpStatus.OK,
    description: 'Reply found'
  })
  public async show(@Param('id') id: number) {
    const reply = await this.feedbackService.getOne(id);
    return fillObject(ReplyRdo, reply)
  }

  @Get('/')
  @ApiResponse({
    type: [ReplyRdo],
    status: HttpStatus.OK,
    description: 'List of replies found'
  })
  public async index() {
    const replies = await this.feedbackService.getAll();
    return fillObject(ReplyRdo, replies)
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Reply was deleted'
  })
  public async delete(@Param('id') id: number) {
    return this.feedbackService.delete(id);
  }
}
