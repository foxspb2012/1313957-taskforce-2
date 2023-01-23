import {Injectable} from '@nestjs/common';
import {CreateReviewDto} from './dto/create-review.dto';
import {ReviewEntity} from './review.entity';
import {ReviewRepository} from './review.repository';
import {Review} from '@taskforce/shared-types';

@Injectable()
export class ReviewService {
  constructor(private readonly contractorReviewRepository: ReviewRepository) {
  }

  public async create(dto: CreateReviewDto) {
    const entity = new ReviewEntity(dto)
    return this.contractorReviewRepository.create(entity);
  }

  public async delete(id: number): Promise<void> {
    await this.contractorReviewRepository.destroy(id);
  }

  public async getOne(id: number) {
    return this.contractorReviewRepository.findById(id);
  }

  public async getAll(): Promise<Review[]> {
    return this.contractorReviewRepository.find();
  }
}
