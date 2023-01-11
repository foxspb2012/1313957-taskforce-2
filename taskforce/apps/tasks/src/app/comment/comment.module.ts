import {Module} from '@nestjs/common';
import {CommentService} from './comment.service';
import {CommentRepository} from './comment.repository';
import {CommentController} from './comment.controller';

@Module({
  imports: [],
  controllers: [CommentController],
  providers: [CommentService, CommentRepository],
})
export class CommentModule {
}
