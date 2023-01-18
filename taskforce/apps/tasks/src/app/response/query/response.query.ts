import {ApiProperty} from '@nestjs/swagger';
import {Transform} from 'class-transformer';
import {IsNumber} from 'class-validator';

export class ResponseQuery {
  @ApiProperty({
    name: 'taskId',
    description: 'ID of the task to which the response',
    type: 'number',
    example: '15',
  })
  @Transform(({value}) => +value)
  @IsNumber()
  taskId: number;
}
