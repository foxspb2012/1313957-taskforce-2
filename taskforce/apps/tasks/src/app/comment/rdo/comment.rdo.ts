import {Expose} from "class-transformer";
import {ApiProperty} from "@nestjs/swagger";

export class CommentRdo {
  @Expose({name: '_id'})
  @ApiProperty({
    description: 'Comment ID',
    example: 'f90422bc-e2c7-4908-af5b-dcb6efb99b76',
  })
  public id: string;

  @Expose()
  @ApiProperty({
    description: 'Text of comment',
    example: 'Thank you very much for your help!',
  })
  public text: string;

  @Expose()
  @ApiProperty({
    description: 'Task id for the comment',
    example: 'cde62511-716e-456c-bc58-cf689bd0591e',
  })
  public taskId: string;

  @Expose()
  @ApiProperty({
    description: 'Author of comment',
    example: 'Fox',
  })
  public author: string;

  @Expose()
  @ApiProperty({
    description: 'Date of creation (ISO format)',
    example: '1982-02-20'
  })
  public creationDate: string;
}
