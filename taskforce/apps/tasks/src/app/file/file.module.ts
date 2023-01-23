import {Module} from '@nestjs/common';
import {FileService} from './file.service';
import {FileRepository} from './file.repository';
import {FileController} from './file.controller';
import {WorkTaskRepository} from '../work-task/work-task.repository';
import {ClientsModule} from '@nestjs/microservices';
import {RABBITMQ_SERVICE} from '../work-task/work-taks.constants';
import {getRabbitMqConfig} from '../../../config';
import {ConfigService} from '@nestjs/config';

@Module({
  imports: [
    ClientsModule.registerAsync([
      {
        name: RABBITMQ_SERVICE,
        useFactory: getRabbitMqConfig,
        inject: [ConfigService],
      },
    ]),
  ],
  controllers: [FileController],
  providers: [FileService, FileRepository, WorkTaskRepository],
  exports: [FileRepository],
})
export class FileModule {
}
