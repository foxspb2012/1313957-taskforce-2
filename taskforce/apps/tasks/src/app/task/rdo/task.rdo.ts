import {Expose} from 'class-transformer';
import {ApiProperty} from '@nestjs/swagger';

export class TaskRdo {
  @Expose({name: '_id'})
  @ApiProperty({
    description: 'Task ID',
    example: 'f90422bc-e2c7-4908-af5b-dcb6efb99b76',
  })
  public id: string;

  @Expose()
  @ApiProperty({
    description: 'Task title',
    example: 'Do the cleaning',
  })
  public title: string;

  @Expose()
  @ApiProperty({
    description: 'Task description',
    example: 'It is necessary to bring everything in order',
  })
  public description: string;

  @Expose()
  @ApiProperty({
    description: 'Task category',
    example: 'Cleaning',
  })
  public category: string;

  @Expose()
  @ApiProperty({
    description: 'Author of task',
    example: 'Fox',
  })
  public author: string;

  @Expose()
  @ApiProperty({
    description: 'Date of creation (ISO format)',
    example: '1982-02-20'
  })
  public creationDate: string;

  @Expose()
  @ApiProperty({
    description: 'Task status',
    example: 'new',
  })
  public status: string;

  @Expose()
  @ApiProperty({
    description: 'Task price',
    example: '90',
  })
  public price: number;

  @Expose()
  @ApiProperty({
    description: 'Due date for task',
    example: '2022-12-11',
  })
  public dueDate: string;

  @Expose()
  @ApiProperty({
    description: 'Task image',
    example: 'task-image.jpg',
  })
  public picture: string;

  @Expose()
  @ApiProperty({
    description: 'Task completion address',
    example: 'Saint-Petersburg, Nevsky avenue 108',
  })
  public address: string;

  @Expose()
  @ApiProperty({
    description: 'Task tags',
    example: ['Development', 'IT'],
  })
  public tags: string[];
}
