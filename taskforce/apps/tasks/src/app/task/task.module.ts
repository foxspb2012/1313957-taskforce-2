import {Module} from '@nestjs/common';
import {TaskService} from './task.service';
import {TaskRepository} from './task.repository';
import {TaskController} from './task.controller';
import {PrismaModule} from '../prisma/prisma.module';
import {CategoryService} from '../category/category.service';
import {CategoryModule} from '../category/category.module';

@Module({
  imports: [TaskModule, PrismaModule, CategoryModule],
  controllers: [TaskController],
  providers: [TaskService, TaskRepository, CategoryService],
})
export class TaskModule {
}
