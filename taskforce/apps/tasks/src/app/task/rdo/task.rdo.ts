import {Expose, Type} from 'class-transformer';
import {ApiProperty} from '@nestjs/swagger';
import {Category, User, Tag, TaskStatus} from '@taskforce/shared-types';
import {CommentRdo} from '../../comment/rdo/comment.rdo';
import {ResponseRdo} from '../../response/rdo/response.rdo';

export class TaskRdo {
  @Expose({name: 'id'})
  @ApiProperty({
    description: 'Task ID',
    example: 123456,
  })
  public id: number;

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
  public category: Category;

  @Expose()
  @ApiProperty({
    description: 'Author of task',
    example: 'Fox',
  })
  public userId: User;

  @Expose()
  @ApiProperty({
    description: 'Task status',
    example: 'new',
  })
  public status: TaskStatus;

  @Expose()
  @ApiProperty({
    description: 'Task price',
    example: '90',
  })
  public price: number;

  @Expose()
  @ApiProperty({
    description: 'Due date for task',
    example: '2022-06-24T11:59:45.571+03',
  })
  public dueDate: Date;

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
  public tags: Tag[];

  @Expose()
  @ApiProperty({
    description: 'Comment`s Id',
    example: [2445, 457],
  })
  @Type(() => CommentRdo)
  public comments: CommentRdo[];

  @Expose()
  @ApiProperty({
    description: 'Responses`s Id',
    example: [548, 214],
  })
  @Type(() => ResponseRdo)
  public responses: ResponseRdo[];

  @Expose()
  @ApiProperty({
    description: 'Date of creation (ISO format)',
    example: '2022-06-24T11:59:45.571+03'
  })
  public createdAt: Date;

  @Expose()
  @ApiProperty({
    description: 'Date of update (ISO format)',
    example: '2022-06-24T11:59:45.571+03'
  })
  public updatedAt: Date;
}
