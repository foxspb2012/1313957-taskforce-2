import {Injectable} from '@nestjs/common';
import dayjs = require('dayjs');
import {CommentMemoryRepository} from './comment-memory.repository';
import {CommentEntity} from './comment.entity';
import {Comment} from '@taskforce/shared-types';
import {CreateCommentDto} from './dto/create-comment.dto';

@Injectable()
export class CommentService {
  constructor(
    private readonly commentMemoryRepository: CommentMemoryRepository
  ) {
  }

  public async createComment(dto: CreateCommentDto) {
    const {
      text,
      taskId,
      author,
      creationDate,
    } = dto;

    const comment: Comment = {
      _id: '',
      text,
      taskId,
      author,
      creationDate: dayjs(creationDate).toDate(),
    }

    const commentEntity = new CommentEntity(comment);

    return this.commentMemoryRepository.create(commentEntity);
  }

  public async getByTaskId(taskId: string): Promise<Comment[]> | null {
    return await this.commentMemoryRepository.findByTaskId(taskId);
  }

  public async deleteComment(id: string): Promise<void> | null {
    return await this.commentMemoryRepository.destroy(id);
  }
}
