import {Expose} from "class-transformer";
import {ApiProperty} from "@nestjs/swagger";

export class FeedbackRdo {
  @Expose({name: 'id'})
  @ApiProperty({
    description: 'Feedback ID',
    example: 1,
  })
  public id: number;

  @Expose()
  @ApiProperty({
    description: 'Text of feedback',
    example: 'A very good performer!',
  })
  public text: string;

  @Expose()
  @ApiProperty({
    description: 'Score of the feedback',
    example: 4,
  })
  public score: number;

  @Expose()
  @ApiProperty({
    description: 'Author id of feedback',
    example: '63a01be48cc77837a5801cce',
  })
  public userId: string;
}
