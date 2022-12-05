import {Module} from '@nestjs/common';
import {TaskMemoryRepository} from './task-memory.repository';
import {TaskController} from './task.controller';
import {TaskService} from './task.service';

@Module({
  providers: [TaskMemoryRepository, TaskService],
  exports: [TaskMemoryRepository],
  controllers: [TaskController],
})
export class TaskModule {
}
