import {TaskStatus, Category, Tag} from "@taskforce/shared-types";
import {ApiProperty} from "@nestjs/swagger";
import {
  ArrayMaxSize,
  IsOptional,
  Length,
  Matches,
} from 'class-validator';

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
  public category: Category;

  @ApiProperty({
    description: 'Id author of task',
    example: '63a01be48cc77837a5801cce',
  })
  public authorId: string;

  @ApiProperty({
    description: 'Task status',
    example: 'new',
    required: false,
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
    maxItems: 5,
    type: 'array',
    items: {
      type: 'string',
      description: 'Task tag starting with a letter',
      minLength: 3,
      maxLength: 10,
      example: 'tag',
    },
    required: false,
  })
  @Matches(/^[ЁёА-яa-zA-Z]{1}.*$/, {
    each: true,
    message:  'Теги должны начинаться с буквы',
  })
  @Length(3, 10, {
    each: true,
    message: 'Длина тегов должна быть не менее 3 символов, и не более 10',
  })
  @ArrayMaxSize(5, { message: 'Максимальное количество тегов - 5' })
  @IsOptional()
  public tags?: Tag[];
}
