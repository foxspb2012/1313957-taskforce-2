import {Review, User} from '@taskforce/shared-types';

export class ReviewEntity implements Review {
  public _id: string;
  public text: string;
  public taskId: string;
  public score: number;
  public author: User;
  public creationDate: Date;

  constructor(review: Review) {
    this.fillEntity(review);
  }

  public toObject(): Review {
    return {...this};
  }

  private fillEntity(review: Review) {
    this._id = review._id;
    this.text = review.text;
    this.taskId = review.taskId;
    this.score = review.score;
    this.author = review.author;
    this.creationDate = review.creationDate;
  }
}
