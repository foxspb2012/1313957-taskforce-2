import {Injectable} from '@nestjs/common';
import {CommentRepository} from './comment.repository';
import {Comment} from '@taskforce/shared-types';
import {CreateCommentDto} from './dto/create-comment.dto';
import {CommentEntity} from './comment.entity';


@Injectable()
export class CommentService {
  constructor(private readonly commentRepository: CommentRepository) {
  }

  public async createComment(dto: CreateCommentDto): Promise<Comment> {
    const newCommentEntity = new CommentEntity(dto);
    return await this.commentRepository.create(newCommentEntity);
  }

  public async getByTaskId(taskId: number): Promise<Comment[]> {
    return await this.commentRepository.getByTaskId(taskId);
  }

  public async deleteComment(id: number): Promise<void> {
    return await this.commentRepository.destroy(id);
  }
}
