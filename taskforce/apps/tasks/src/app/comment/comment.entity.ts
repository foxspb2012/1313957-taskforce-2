import {Comment, User} from '@taskforce/shared-types';

export class CommentEntity implements Comment {
  public _id: string;
  public text: string;
  public taskId: string;
  public author: User;
  public creationDate: Date;

  constructor(comment: Comment) {
    this.fillEntity(comment);
  }

  public toObject() {
    return {...this};
  }

  public fillEntity(comment: Comment) {
    this._id = comment._id;
    this.text = comment.text;
    this.taskId = comment.taskId;
    this.author = comment.author;
    this.creationDate = comment.creationDate;
  }
}
