import {User} from '@taskforce/shared-types';

export interface Response {
  _id: string;
  text: string;
  taskId: string;
  author: User;
  creationDate: Date;
}
