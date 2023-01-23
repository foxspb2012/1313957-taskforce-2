import {ApiProperty} from '@nestjs/swagger';
import {Expose} from 'class-transformer';

export class TagRdo {
  @ApiProperty({
    description: 'Tag id',
    example: '1'
  })
  @Expose()
  public id: string;

  @ApiProperty({
    description: 'Tag name',
    example: 'Уборка номера'
  })
  @Expose()
  public name: string;
}
