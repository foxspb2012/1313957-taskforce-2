import {Tag} from '../tag/tag.interface';
import {Comment} from '../comment/comment.interface';
import {Category} from '../category/category.interface';
import {Response} from '../response/response.interface';
import {TaskStatus} from './task-status.enum';

export interface Task {
  id?: number;
  title: string,
  description: string,
  category: Category,
  authorId: string;
  contractorId?: string;
  status?: TaskStatus;
  price?: number,
  dueDate?: Date,
  picture?: string,
  address?: string,
  tags?: Tag[],
  comments?: Comment[];
  responses?: Response[];
  createdAt?: Date;
  updatedAt?: Date;
}
