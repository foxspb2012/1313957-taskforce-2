import {User} from "@taskforce/shared-types";
import {ApiProperty} from "@nestjs/swagger";

export class CreateCommentDto {
  @ApiProperty({
    description: 'Text of comment',
    example: 'Thank you very much for your help!',
  })
  public text: string;

  @ApiProperty({
    description: 'Task id for the comment',
    example: 'cde62511-716e-456c-bc58-cf689bd0591e',
  })
  public taskId: string;

  @ApiProperty({
    description: 'Author of comment',
    example: 'Fox',
  })
  public author: User;

  @ApiProperty({
    description: 'Date of creation (ISO format)',
    example: '2022-12-03'
  })
  public creationDate: Date;
}
