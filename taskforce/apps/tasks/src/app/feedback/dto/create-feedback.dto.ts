import {ApiProperty} from '@nestjs/swagger';
import {IsMongoId, IsNumber, MaxLength, MinLength} from 'class-validator';
import {CreateFeedbackError} from '../feedback.constants';
import {DoesTaskExist} from '../../validators';
import {FeedbackText} from '../feedback.constants';

export class CreateFeedbackDto {
  @ApiProperty({
    description: 'A budget of the task',
    example: '100',
  })
  @IsNumber()
  budget: number;

  @ApiProperty({
    description: 'A text of the task reply',
    example:
      'Могу сделать всё в лучшем виде. У меня есть необходимый опыт и инструменты.',
  })
  @MinLength(FeedbackText.MIN, {
    message: CreateFeedbackError.FEEDBACK_TOO_SHORT,
  })
  @MaxLength(FeedbackText.MAX, {
    message: CreateFeedbackError.FEEDBACK_TOO_LONG,
  })
  comment: string;

  @ApiProperty({
    description: 'Task ID',
    example: '5',
  })
  @IsNumber()
  @DoesTaskExist({
    message: CreateFeedbackError.TASK_DOESNT_EXIST,
  })
  taskId: number;

  @ApiProperty({
    description: 'User ID',
    example: '638dac5ca3a0dafd519c1827',
  })
  @IsMongoId()
  userId: string;
}
