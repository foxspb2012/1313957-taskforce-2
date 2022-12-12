import {User} from '@taskforce/shared-types';

export interface Review {
  _id: string;
  text: string;
  taskId: string;
  score: number;
  author: User;
  creationDate: Date;
}
