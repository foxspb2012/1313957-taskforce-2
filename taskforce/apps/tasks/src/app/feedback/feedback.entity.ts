import {Entity} from '@taskforce/core';
import {Feedback} from '@taskforce/shared-types';

export class FeedbackEntity implements Entity<FeedbackEntity>, Feedback {
  budget: number;
  comment: string;
  id: number;
  taskId: number;
  userId: string;

  constructor(feedback: Feedback) {
    this.fillEntity(feedback);
  }

  public toObject(): FeedbackEntity {
    return {...this}
  }

  public fillEntity(taskReply: Feedback) {
    this.budget = taskReply.budget;
    this.comment = taskReply.comment;
    this.id = taskReply.id;
    this.taskId = taskReply.taskId;
    this.userId = taskReply.userId;
  }
}
