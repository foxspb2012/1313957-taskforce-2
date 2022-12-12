import {ApiProperty} from '@nestjs/swagger';

export class UpdateTaskDto {

  @ApiProperty({
    description: 'Task title',
    example: 'Do the cleaning',
    required: false,
  })
  public title?: string;

  @ApiProperty({
    description: 'Task description',
    example: 'It is necessary to bring everything in order',
    required: false,
  })
  public description?: string;

  @ApiProperty({
    description: 'Task category',
    example: 'Cleaning',
    required: false,
  })
  public category?: string;

  @ApiProperty({
    description: 'Task price',
    example: '90',
    required: false,
  })
  public price?: number;

  @ApiProperty({
    description: 'Due date for task',
    example: '2022-12-11',
    required: false,
  })
  public dueDate?: Date;

  @ApiProperty({
    description: 'Task completion address',
    example: 'Saint-Petersburg, Nevsky avenue 108',
    required: false,
  })
  public address?: string;

  @ApiProperty({
    description: 'Task tags',
    example: ['Development', 'IT'],
    required: false,
  })
  public tags?: string[];
}
