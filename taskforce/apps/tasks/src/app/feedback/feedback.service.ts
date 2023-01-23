import {Injectable} from '@nestjs/common';
import {CreateFeedbackDto} from './dto/create-feedback.dto';
import {FeedbackEntity} from './feedback.entity';
import {FeedbackRepository} from './feedback.repository';
import {Feedback} from '@taskforce/shared-types';

@Injectable()
export class FeedbackService {
  constructor(
    private readonly feedbackRepository: FeedbackRepository
  ) {
  }

  public async create(dto: CreateFeedbackDto) {
    const replyEntity = new FeedbackEntity(dto);
    return this.feedbackRepository.create(replyEntity);
  }

  public async getOne(id: number) {
    return this.feedbackRepository.findById(id);
  }

  public async getAll(): Promise<Feedback[]> {
    return this.feedbackRepository.find();
  }

  public async delete(id: number) {
    await this.feedbackRepository.destroy(id);
  }
}
