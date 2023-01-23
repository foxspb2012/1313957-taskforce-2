import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {WorkTaskModule} from './work-task/work-task.module';
import {FeedbackModule} from './feedback/feedback.module';
import {PrismaModule} from './prisma/prisma.module';
import {TaskSkillModule} from './task-skill/task-skill.module';
import {TaskTagModule} from './task-tag/task-tag.module';
import {ReviewModule} from './review/review.module';
import {ENV_FILE_PATH} from './app.constants';
import {jwtConfig, rabbitMqOptions} from '../../config';
import {validateEnvironment} from './env.validation';
import {FileModule} from './file/file.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      cache: true,
      isGlobal: true,
      envFilePath: ENV_FILE_PATH,
      load: [rabbitMqOptions, jwtConfig],
      validate: validateEnvironment,
    }),
    WorkTaskModule,
    FeedbackModule,
    ReviewModule,
    PrismaModule,
    TaskSkillModule,
    TaskTagModule,
    FileModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
}
