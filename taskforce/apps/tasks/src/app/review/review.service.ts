import {Injectable} from '@nestjs/common';
import dayjs = require('dayjs');
import {ReviewEntity} from './review.entity';
import {Review} from '@taskforce/shared-types';
import {CreateReviewDto} from './dto/create-review.dto';
import {ReviewMemoryRepository} from './review-memory.repository';

@Injectable()
export class ReviewService {
  constructor(
    private readonly reviewMemoryRepository: ReviewMemoryRepository
  ) {
  }

  public async createReview(dto: CreateReviewDto) {
    const {
      text,
      taskId,
      score,
      author,
      creationDate,
    } = dto;

    const review: Review = {
      _id: '',
      text,
      taskId,
      score,
      author,
      creationDate: dayjs(creationDate).toDate(),
    }

    const commentEntity = new ReviewEntity(review);

    return this.reviewMemoryRepository.create(commentEntity);
  }

  public async getByTaskId(taskId: string): Promise<Review[]> | null {
    return await this.reviewMemoryRepository.findByTaskId(taskId);
  }
}
