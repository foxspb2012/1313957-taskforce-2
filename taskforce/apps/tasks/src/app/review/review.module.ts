import {Module} from '@nestjs/common';
import {ReviewController} from './review.controller';
import {ReviewService} from './review.service';
import {ReviewMemoryRepository} from './review-memory.repository';

@Module({
  providers: [ReviewMemoryRepository, ReviewService],
  exports: [ReviewMemoryRepository],
  controllers: [ReviewController],
})
export class ReviewModule {
}
