import {Expose} from "class-transformer";
import {ApiProperty} from "@nestjs/swagger";

export class ResponseRdo {
  @Expose({name: '_id'})
  @ApiProperty({
    description: 'Response ID',
    example: 'f90422bc-e2c7-4908-af5b-dcb6efb99b76',
  })
  public id: string;

  @Expose()
  @ApiProperty({
    description: 'Text of response',
    example: 'I`m ready for it!',
  })
  public text: string;

  @Expose()
  @ApiProperty({
    description: 'Author of response',
    example: 'Fox',
  })
  public author: string;

  @Expose()
  @ApiProperty({
    description: 'Date of creation (ISO format)',
    example: '2022-12-03'
  })
  public creationDate: string;
}
