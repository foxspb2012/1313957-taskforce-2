import {ApiProperty} from '@nestjs/swagger';

export class CreateCategoryDto {
  @ApiProperty({
    description: 'Наименование категории',
    example: 'Cats'
  })
  title: string;
}
