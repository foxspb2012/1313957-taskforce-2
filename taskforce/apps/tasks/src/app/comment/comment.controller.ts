import {Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Query} from '@nestjs/common';
import {ApiQuery, ApiResponse, ApiTags} from '@nestjs/swagger';
import {CommentService} from './comment.service';
import {CreateCommentDto} from './dto/create-comment.dto';
import {CommentRdo} from './rdo/comment.rdo';
import {fillObject} from '@taskforce/core';

@ApiTags('comment')
@Controller('comment')
export class CommentController {
  constructor(
    private readonly commentService: CommentService
  ) {
  }

  @Post('')
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The new comment has been successfully created',
    type: CommentRdo,
  })
  public async create(@Body() dto: CreateCommentDto) {
    const newTask = await this.commentService.createComment(dto);
    return fillObject(CommentRdo, newTask);
  }

  @Get('')
  @ApiQuery({name: 'taskId'})
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Comments by the taskId',
    type: [CommentRdo],
  })
  public async getById(@Query() {taskId}) {
    const comments = await this.commentService.getByTaskId(taskId);
    if (!comments) {
      throw new Error('Comments by task id not found');
    }
    return fillObject(CommentRdo, comments);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Delete the comment by id'
  })
  public async deleteTask(@Param() {id}) {
    await this.commentService.deleteComment(id);
  }
}
