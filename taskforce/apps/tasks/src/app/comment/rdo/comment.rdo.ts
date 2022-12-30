import {Expose} from "class-transformer";
import {ApiProperty} from "@nestjs/swagger";

export class CommentRdo {
  @Expose({name: 'id'})
  @ApiProperty({
    description: 'Comment ID',
    example: 25,
  })
  public id: number;

  @Expose()
  @ApiProperty({
    description: 'Text of comment',
    example: 'Thank you very much for your help!',
  })
  public text: string;

  @Expose()
  @ApiProperty({
    description: 'User id of comment',
    example: '63a01be48cc77837a5801cce',
  })
  public userId: string;

  @Expose()
  @ApiProperty({
    description: 'Date of creation (ISO format)',
    example: '2022-06-24T11:59:45.571+03'
  })
  public createdAt: Date;
}
