import {Expose} from "class-transformer";
import {IsOptional} from 'class-validator';
import {ApiProperty} from "@nestjs/swagger";

export class ResponseRdo {
  @Expose({name: 'id'})
  @ApiProperty({
    description: 'Response ID',
    example: 34,
  })
  public id: number;

  @Expose()
  @IsOptional()
  @ApiProperty({
    description: 'Text of response',
    example: 'I`m ready for it!',
  })
  public text: string;

  @Expose()
  @IsOptional()
  @ApiProperty({
    description: 'Offered  price',
    example: 100500
  })
  public price: number;

  @Expose()
  @ApiProperty({
    description: 'User id of the response',
    example: '63a01be48cc77837a5801cce',
  })
  public userId: string;
}
