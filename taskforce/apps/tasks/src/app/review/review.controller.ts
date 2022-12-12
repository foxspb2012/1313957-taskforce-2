import {Body, Controller, Get, HttpStatus, Post, Query} from '@nestjs/common';
import {ApiQuery, ApiResponse, ApiTags} from '@nestjs/swagger';
import {ReviewService} from './review.service';
import {CreateReviewDto} from './dto/create-review.dto';
import {ReviewRdo} from './rdo/review.rdo';
import {fillObject} from '@taskforce/core';

@ApiTags('review')
@Controller('review')
export class ReviewController {
  constructor(
    private readonly reviewService: ReviewService
  ) {
  }

  @Post('')
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The new review has been successfully created',
    type: ReviewRdo,
  })
  public async create(@Body() dto: CreateReviewDto) {
    const newReview = await this.reviewService.createReview(dto);
    return fillObject(ReviewRdo, newReview);
  }

  @Get('')
  @ApiQuery({name: 'taskId'})
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Reviews by the taskId',
    type: [ReviewRdo],
  })
  public async getById(@Query() {taskId}) {
    const reviews = await this.reviewService.getByTaskId(taskId);
    if (!reviews) {
      throw new Error('Reviews by task id not found');
    }
    return fillObject(ReviewRdo, reviews);
  }
}
