import {ApiProperty} from '@nestjs/swagger';
import {Category, Tag, TaskStatus} from '@taskforce/shared-types';

export class UpdateTaskDto {

  @ApiProperty({
    description: 'Task title',
    example: 'Do the cleaning',
    required: false,
  })
  public title: string;

  @ApiProperty({
    description: 'Task description',
    example: 'It is necessary to bring everything in order',
    required: false,
  })
  public description: string;

  @ApiProperty({
    description: 'Task category',
    example: 'Cleaning',
    required: false,
  })
  public category: Category;

  @ApiProperty({
    description: 'Id author of task',
    example: '63a01be48cc77837a5801cce',
  })
  public authorId: string;

  @ApiProperty({
    description: 'Task status',
    example: 'new',
  })
  public status?: TaskStatus;

  @ApiProperty({
    description: 'Task price',
    example: '90',
    required: false,
  })
  public price?: number;

  @ApiProperty({
    description: 'Due date for task',
    example: '2022-06-24T11:59:45.571+03',
    required: false,
  })
  public dueDate?: Date;

  @ApiProperty({
    description: 'Task image',
    example: 'task-image.jpg',
    required: false,
  })
  public picture?: string;

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
  public tags?: Tag[];
}
