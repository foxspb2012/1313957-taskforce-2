import {Response, User} from '@taskforce/shared-types';

export class ResponseEntity implements Response {
  public _id: string;
  public text: string;
  public taskId: string;
  public author: User;
  public creationDate: Date;

  constructor(response: Response) {
    this.fillEntity(response);
  }

  public toObject() {
    return {...this};
  }

  public fillEntity(response: Response) {
    this._id = response._id;
    this.text = response.text;
    this.taskId = response.taskId;
    this.author = response.author;
    this.creationDate = response.creationDate;
  }
}
