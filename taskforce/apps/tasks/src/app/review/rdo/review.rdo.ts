import {Expose} from "class-transformer";
import {ApiProperty} from "@nestjs/swagger";

export class ReviewRdo {
  @Expose({name: '_id'})
  @ApiProperty({
    description: 'Review ID',
    example: 'f90422bc-e2c7-4908-af5b-dcb6efb99b76',
  })
  public id: string;

  @Expose()
  @ApiProperty({
    description: 'Text of review',
    example: 'A very good performer!',
  })
  public text: string;

  @Expose()
  @ApiProperty({
    description: 'Score of the review',
    example: 4,
  })
  public score: string;

  @Expose()
  @ApiProperty({
    description: 'Author of review',
    example: 'Fox',
  })
  public author: string;

  @Expose()
  @ApiProperty({
    description: 'Date of creation (ISO format)',
    example: '2022-12-02'
  })
  public creationDate: string;
}
