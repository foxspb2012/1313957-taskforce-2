import {Expose} from 'class-transformer';
import {ApiProperty} from '@nestjs/swagger';

export class CategoryRdo {
  @Expose({name: 'id'})
  @ApiProperty({
    description: 'Category ID',
    example: 25,
  })
  public id: number;

  @Expose()
  @ApiProperty({
    description: 'Name of category',
    example: 'Cats',
  })
  public title: string;
}
