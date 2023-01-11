import {Module} from '@nestjs/common';
import {FeedbackService} from './feedback.service';
import {FeedbackRepository} from './feedback.repository';
import {FeedbackController} from './feedback.controller';

@Module({
  controllers: [FeedbackController],
  providers: [FeedbackService, FeedbackRepository],
})
export class FeedbackModule {
}
