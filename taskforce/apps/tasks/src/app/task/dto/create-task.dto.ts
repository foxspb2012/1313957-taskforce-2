import {TaskStatus, User} from "@taskforce/shared-types";
import {ApiProperty} from "@nestjs/swagger";

export class CreateTaskDto {
  @ApiProperty({
    description: 'Task title',
    example: 'Do the cleaning',
  })
  public title: string;

  @ApiProperty({
    description: 'Task description',
    example: 'It is necessary to bring everything in order',
  })
  public description: string;

  @ApiProperty({
    description: 'Task category',
    example: 'Cleaning',
  })
  public category: string;

  @ApiProperty({
    description: 'Author of task',
    example: 'Fox',
  })
  public author: User;

  @ApiProperty({
    description: 'Date of creation (ISO format)',
    example: '1982-02-20'
  })
  public creationDate: Date;

  @ApiProperty({
    description: 'Task status',
    example: 'new',
  })
  public status: TaskStatus;

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
  public tags?: string[];
}
