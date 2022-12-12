import {User} from "@taskforce/shared-types";
import {ApiProperty} from "@nestjs/swagger";

export class CreateResponseDto {
  @ApiProperty({
    description: 'Text of response',
    example: 'I`m ready for it!',
  })
  public text: string;

  @ApiProperty({
    description: 'Task id for the response',
    example: 'cde62511-716e-456c-bc58-cf689bd0591e',
  })
  public taskId: string;

  @ApiProperty({
    description: 'Author of response',
    example: 'Fox',
  })
  public author: User;

  @ApiProperty({
    description: 'Date of creation (ISO format)',
    example: '2022-12-03'
  })
  public creationDate: Date;
}
