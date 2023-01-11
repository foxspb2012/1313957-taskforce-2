import {Entity} from '@taskforce/core';
import {Feedback} from '@taskforce/shared-types';

export class FeedbackEntity implements Entity<FeedbackEntity>, Feedback {
  public text: string;
  public taskId: number;
  public score: number;
  public userId: string;

  constructor(feedback: Feedback) {
    this.fillEntity(feedback);
  }

  public toObject(): FeedbackEntity {
    return {...this};
  }

  public fillEntity(item: Feedback) {
    this.text = item.text;
    this.taskId = item.taskId;
    this.score = item.score;
    this.userId = item.userId;
  }
}
