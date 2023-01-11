import {Body, Controller, Get, HttpStatus, Post, Query} from '@nestjs/common';
import {ApiQuery, ApiResponse, ApiTags} from '@nestjs/swagger';
import {FeedbackService} from './feedback.service';
import {CreateFeedbackDto} from './dto/create-feedback.dto';
import {FeedbackRdo} from './rdo/feedback.rdo';
import {fillObject} from '@taskforce/core';

@ApiTags('feedback')
@Controller('feedback')
export class FeedbackController {
  constructor(
    private readonly feedbackService: FeedbackService
  ) {
  }

  @Post('/')
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The new feedback has been successfully created',
    type: FeedbackRdo,
  })
  public async create(@Body() dto: CreateFeedbackDto) {
    const newFeedback = await this.feedbackService.createFeedback(dto);
    return fillObject(FeedbackRdo, newFeedback);
  }

  @Get('/')
  @ApiQuery({name: 'userId'})
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Feedbacks by the userId',
    type: [FeedbackRdo],
  })
  public async getById(@Query() {taskId}) {
    const feedbacks = await this.feedbackService.getByUserId(taskId);
    if (!feedbacks) {
      throw new Error('Feedbacks by task id not found');
    }
    return fillObject(FeedbackRdo, feedbacks);
  }
}
