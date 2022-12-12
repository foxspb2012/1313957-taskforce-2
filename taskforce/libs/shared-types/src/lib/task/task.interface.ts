import {User} from '../user/user.interface';
import {TaskStatus} from './task-status.enum';

export interface Task {
  _id: string;
  title: string,
  description: string,
  category: string,
  author: User;
  creationDate: Date;
  status: TaskStatus;
  price?: number,
  dueDate?: Date,
  picture?: string,
  address?: string,
  tags?: string[],
}
