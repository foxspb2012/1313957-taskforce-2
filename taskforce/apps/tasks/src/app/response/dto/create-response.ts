import {ApiProperty} from "@nestjs/swagger";

export class CreateResponseDto {
  @ApiProperty({
    description: 'Text of response',
    example: 'I`m ready for it!',
  })
  public text: string;

  @ApiProperty({
    description: 'Offered  price',
    example: 100500
  })
  public price: number;

  @ApiProperty({
    description: 'Task id for the response',
    example: 25,
  })
  public taskId: number;

  @ApiProperty({
    description: 'User id for the response',
    example: '63a01be48cc77837a5801cce',
  })
  public userId: string;
}
