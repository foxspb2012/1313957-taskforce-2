import {Module} from '@nestjs/common';
import {TaskModule} from './task/task.module';
import {CommentModule} from './comment/comment.module';
import {FeedbackModule} from './feedback/feedback.module';
import {ResponseModule} from './response/response.module';

@Module({
  imports: [TaskModule, CommentModule, FeedbackModule, ResponseModule],
  controllers: [],
  providers: [],
})
export class AppModule {
}
