import {Controller, Post, Get, Delete, HttpCode, HttpStatus, Body, Param, Patch, Query} from '@nestjs/common';
import {ApiQuery, ApiResponse, ApiTags, ApiParam} from '@nestjs/swagger';
import {fillObject} from '@taskforce/core';
import {TaskService} from './task.service';
import {CreateTaskDto} from './dto/create-task.dto';
import {UpdateTaskDto} from './dto/update-task.dto';
import {TaskRdo} from './rdo/task.rdo';
import {TaskQuery} from './query/task.query';

@ApiTags('tasks')
@Controller('tasks')
export class TaskController {
  constructor(
    private readonly taskService: TaskService
  ) {
  }

  @Post('/')
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The new task has been successfully created',
    type: TaskRdo,
  })
  public async create(@Body() dto: CreateTaskDto) {
    const newTask = await this.taskService.createTask(dto);
    return fillObject(TaskRdo, newTask);
  }

  @Get('/')
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Show tasks by query parameters',
    type: TaskRdo,
  })
  public async index(@Query() query: TaskQuery) {
    const tasks = await this.taskService.getTasks(query);
    return fillObject(TaskRdo, tasks);
  }

  @Get('/:id')
  @ApiQuery({name: 'id'})
  @ApiParam({
    name: 'id',
    description: 'Task ID',
    example: '3',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Task information',
    type: TaskRdo,
  })
  public async show(@Param('id') id: number) {
    const existTask = await this.taskService.getTask(id);

    if (!existTask) {
      throw new Error('Task not found');
    }

    return fillObject(TaskRdo, existTask);
  }

  @Patch('/:id')
  @ApiParam({
    name: 'id',
    description: 'Task ID',
    example: '3',
  })
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Update the task',
    type: [TaskRdo],
  })
  public async update(@Param('id') id: number, @Body() dto: UpdateTaskDto) {
    const existTask = await this.taskService.getTask(id);

    if (!existTask) {
      throw new Error('Task not found');
    }

    const task = await this.taskService.updateTask(id, dto);
    return fillObject(TaskRdo, task);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiParam({
    name: 'id',
    description: 'Task ID',
    example: '3',
  })
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Delete the task'
  })
  public async deleteTask(@Param('id') id: number) {
    await this.taskService.deleteTask(id);
  }
}
