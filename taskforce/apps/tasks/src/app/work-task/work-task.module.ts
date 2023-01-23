import {Module} from '@nestjs/common';
import {FeedbackModule} from '../feedback/feedback.module';
import {WorkTaskController} from './work-task.controller';
import {WorkTaskService} from './work-task.service';
import {WorkTaskRepository} from './work-task.repository';
import {TaskSkillModule} from '../task-skill/task-skill.module';
import {TaskTagModule} from '../task-tag/task-tag.module';
import {DoesSkillExistConstraint} from '../validators';
import {ClientsModule} from '@nestjs/microservices';
import {RABBITMQ_SERVICE} from './work-taks.constants';
import {getRabbitMqConfig} from '../../../config';
import {ConfigService} from '@nestjs/config';
import {FileModule} from '../file/file.module';
import {JwtModule} from '@nestjs/jwt';
import {
  AccessTokenStrategy,
  ClientStrategy,
  ContractorStrategy,
} from './strategies';

@Module({
  imports: [
    FeedbackModule,
    TaskSkillModule,
    TaskTagModule,
    FileModule,
    FeedbackModule,
    JwtModule.register({}),
    ClientsModule.registerAsync([
      {
        name: RABBITMQ_SERVICE,
        useFactory: getRabbitMqConfig,
        inject: [ConfigService],
      },
    ]),
  ],
  controllers: [WorkTaskController],
  providers: [
    WorkTaskService,
    WorkTaskRepository,
    DoesSkillExistConstraint,
    AccessTokenStrategy,
    ClientStrategy,
    ContractorStrategy,
  ],
  exports: [WorkTaskRepository],
})
export class WorkTaskModule {
}
