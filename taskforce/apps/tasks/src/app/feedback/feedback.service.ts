import {Injectable} from '@nestjs/common';
import {Feedback, Response} from '@taskforce/shared-types';
import {FeedbackEntity} from './feedback.entity';
import {CreateFeedbackDto} from './dto/create-feedback.dto';
import {FeedbackRepository} from './feedback.repository';

@Injectable()
export class FeedbackService {
  constructor(
    private readonly feedbackRepository: FeedbackRepository
  ) {
  }

  public async createFeedback(dto: CreateFeedbackDto): Promise<Feedback> {
    const feedback = new FeedbackEntity(dto);
    return await this.feedbackRepository.create(feedback);
  }

  public async getByUserId(id: string): Promise<Response[]> {
    return await this.feedbackRepository.findByUserId(id);
  }
}
