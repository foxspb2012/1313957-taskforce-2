import {ApiProperty} from '@nestjs/swagger';
import {Transform} from 'class-transformer';
import {IsNumber} from 'class-validator';

export class CommentQuery {
  @ApiProperty({
    name: 'taskId',
    description: 'ID of the task to which the comments',
    type: 'number',
    example: '15',
  })
  @Transform(({value}) => +value)
  @IsNumber()
  taskId: number;
}
