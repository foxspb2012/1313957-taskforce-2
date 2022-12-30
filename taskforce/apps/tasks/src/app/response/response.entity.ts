import {Entity} from '@taskforce/core';
import {Response} from '@taskforce/shared-types';

export class ResponseEntity implements Entity<ResponseEntity>, Response {
  public text?: string;
  public price?: number;
  public userId: string;
  public taskId: number;

  constructor(response: Response) {
    this.fillEntity(response);
  }

  public toObject() {
    return {...this};
  }

  public fillEntity(response: Response) {
    this.text = response.text;
    this.price = response.price;
    this.userId = response.userId;
    this.taskId = response.taskId;
  }
}
