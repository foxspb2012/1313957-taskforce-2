import {ApiProperty} from "@nestjs/swagger";

export class CreateFeedbackDto {
  @ApiProperty({
    description: 'Text of feedback',
    example: 'A very good performer!',
  })
  public text: string;

  @ApiProperty({
    description: 'Task id for the feedback',
    example: 25,
  })
  public taskId: number;

  @ApiProperty({
    description: 'Scores of the feedback',
    example: 4,
  })
  public score: number;

  @ApiProperty({
    description: 'Author id of feedback',
    example: '63a01be48cc77837a5801cce',
  })
  public userId: string;
}
