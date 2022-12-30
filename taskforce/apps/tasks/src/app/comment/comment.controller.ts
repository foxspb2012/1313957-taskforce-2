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

  @Post('/')
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The new comment has been successfully created',
    type: CommentRdo,
  })
  public async create(@Body() dto: CreateCommentDto) {
    const newComment = await this.commentService.createComment(dto);
    return fillObject(CommentRdo, newComment);
  }

  @Get('/')
  @ApiQuery({name: 'taskId'})
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Comments by the taskId',
    type: [CommentRdo],
  })
  public async getById(@Query() {taskId}) {
    const id = parseInt(taskId, 10);
    const comments = await this.commentService.getByTaskId(id);
    if (!comments) {
      throw new Error('Comments by task id not found');
    }
    return fillObject(CommentRdo, comments);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiResponse({
    status: HttpStatus.NO_CONTENT,
    description: 'Delete the comment by id'
  })
  public async deleteTask(@Param('id') id: string) {
    const commentId = parseInt(id, 10);
    await this.commentService.deleteComment(commentId);
  }
}
