import {Controller, Post, Get, Delete, HttpCode, HttpStatus, Body, Param, Patch, Query} from '@nestjs/common';
import {ApiQuery, ApiResponse, ApiTags} from '@nestjs/swagger';
import {fillObject} from '@taskforce/core';
import {TaskService} from './task.service';
import {CreateTaskDto} from './dto/create-task.dto';
import {UpdateTaskDto} from './dto/update-task.dto';
import {TaskRdo} from './rdo/task.rdo';

@ApiTags('task')
@Controller('task')
export class TaskController {
  constructor(
    private readonly taskService: TaskService
  ) {
  }

  @Post('')
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The new task has been successfully created',
    type: TaskRdo,
  })
  public async create(@Body() dto: CreateTaskDto) {
    const newTask = await this.taskService.createTask(dto);
    return fillObject(TaskRdo, newTask);
  }

  @Get(':id')
  @ApiQuery({name: 'id'})
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Task information',
    type: TaskRdo,
  })
  public async show(@Param() {id}) {
    const existTask = await this.taskService.getTask(id);

    if (!existTask) {
      throw new Error('Task not found');
    }

    return fillObject(TaskRdo, existTask);
  }

  @Get('/')
  @ApiQuery({name: 'categoryId'})
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Information about tasks of the same category',
    type: [TaskRdo],
  })
  public async getByCategory(@Query() {categoryId}) {
    const id = parseInt(categoryId, 10);
    const tasks = await this.taskService.getByCategory(id);
    if (!tasks) {
      throw new Error('Tasks by category not found');
    }
    return fillObject(TaskRdo, tasks);
  }

  @Patch(':id')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Update the task',
    type: [TaskRdo],
  })
  public async update(@Param() {id}, @Body() dto: UpdateTaskDto) {
    const taskId = parseInt(id, 10);
    const existTask = await this.taskService.getTask(taskId);

    if (!existTask) {
      throw new Error('Task not found');
    }

    const task = await this.taskService.updateTask(taskId, dto);
    return fillObject(TaskRdo, task);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Delete the task'
  })
  public async deleteTask(@Param() {id}) {
    await this.taskService.deleteTask(id);
  }
}
