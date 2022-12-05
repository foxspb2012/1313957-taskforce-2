import {Controller, Post, Get, Delete, HttpCode, HttpStatus, Body, Param, Patch, Query} from '@nestjs/common';
import {CreateTaskDto} from './dto/create-task.dto';
import {TaskService} from './task.service';
import {fillObject} from '@taskforce/core';
import {TASKS_BY_CATEGORY_NOT_FOUND_ERROR, TASK_NOT_FOUND_ERROR} from './task.const';
import {TaskRdo} from './rdo/task.rdo';
import {UpdateTaskDto} from './dto/update-task.dto';

@Controller('task')
export class TaskController {

  constructor(
    private readonly taskService: TaskService
  ) {
  }

  @Post('')
  @HttpCode(HttpStatus.CREATED)
  public async create(@Body() dto: CreateTaskDto) {
    const newTask = await this.taskService.createTask(dto);
    return fillObject(TaskRdo, newTask);
  }

  @Get(':id')
  public async show(@Param() {id}) {
    const existTask = await this.taskService.getTask(id);

    if (!existTask) {
      throw new Error(TASK_NOT_FOUND_ERROR);
    }

    return fillObject(TaskRdo, existTask);
  }

  @Get('')
  public async getByCategory(@Query() {category}) {
    const tasks = await this.taskService.getByCategory(category);
    if (!tasks) {
      throw new Error(TASKS_BY_CATEGORY_NOT_FOUND_ERROR);
    }
    return fillObject(TaskRdo, tasks);
  }

  @Patch(':id')
  public async update(@Param() {id}, @Body() dto: UpdateTaskDto) {
    const existTask = await this.taskService.getTask(id);

    if (!existTask) {
      throw new Error(TASK_NOT_FOUND_ERROR);
    }

    const task = await this.taskService.updateTask(id, dto);
    return fillObject(TaskRdo, task);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  public async deleteTask(@Param() {id}) {
    await this.taskService.deleteTask(id);
  }
}
