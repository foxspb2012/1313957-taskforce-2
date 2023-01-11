import {Entity} from '@taskforce/core';
import {Comment} from '@taskforce/shared-types';

export class CommentEntity implements Entity<CommentEntity>, Comment {
  public id?: number;
  public text: string;
  public taskId: number;
  public userId: string;
  public createdAt?: Date;

  constructor(comment: Comment) {
    this.fillEntity(comment);
  }

  public toObject() {
    return {...this};
  }

  public fillEntity(comment: Comment) {
    this.text = comment.text;
    this.taskId = comment.taskId;
    this.userId = comment.userId;
  }
}
