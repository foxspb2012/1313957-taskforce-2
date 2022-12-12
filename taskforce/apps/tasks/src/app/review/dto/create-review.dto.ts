import {User} from "@taskforce/shared-types";
import {ApiProperty} from "@nestjs/swagger";

export class CreateReviewDto {
  @ApiProperty({
    description: 'Text of review',
    example: 'A very good performer!',
  })
  public text: string;

  @ApiProperty({
    description: 'Task id for the review',
    example: 'cde62511-716e-456c-bc58-cf689bd0591e',
  })
  public taskId: string;

  @ApiProperty({
    description: 'Score of the review',
    example: 4,
  })
  public score: number;

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
