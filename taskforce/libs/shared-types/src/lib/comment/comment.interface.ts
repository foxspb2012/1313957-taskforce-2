import {User} from '../user/user.interface';

export interface Comment {
  _id: string;
  text: string;
  taskId: string;
  author: User;
  creationDate: Date;
}
