import {Module} from '@nestjs/common';
import {CommentController} from './comment.controller';
import {CommentService} from './comment.service';
import {CommentMemoryRepository} from './comment-memory.repository';

@Module({
  providers: [CommentMemoryRepository, CommentService],
  exports: [CommentMemoryRepository],
  controllers: [CommentController],
})
export class CommentModule {
}
