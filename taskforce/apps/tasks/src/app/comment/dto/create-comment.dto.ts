import {ApiProperty} from "@nestjs/swagger";

export class CreateCommentDto {
  @ApiProperty({
    description: 'Text of comment',
    example: 'Thank you very much for your help!',
  })
  public text: string;

  @ApiProperty({
    description: 'Task id for the comment',
    example: 25,
  })
  public taskId: number;

  @ApiProperty({
    description: 'User id of comment',
    example: '63a01be48cc77837a5801cce',
  })
  public userId: string;
}
