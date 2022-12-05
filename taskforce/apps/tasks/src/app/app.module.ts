import {Module} from '@nestjs/common';
import {TaskModule} from './task/task.module';
import {CommentModule} from './comment/comment.module';
import {ReviewModule} from './review/review.module';
import {ResponseModule} from './response/response.module';

@Module({
  imports: [TaskModule, CommentModule, ReviewModule, ResponseModule],
  controllers: [],
  providers: [],
})
export class AppModule {
}
