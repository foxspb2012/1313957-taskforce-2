import {
  Feedback,
  Skill,
  Tag,
  TaskFile
} from '@taskforce/shared-types';
import {TaskStatus} from './task-status.type';

export interface Task {
  id?: number;
  clientId: string;
  contractorId?: string;
  title: string;
  description: string;
  skills?: Skill[];
  dueDate?: Date;
  budget?: number;
  image?: string;
  address?: string;
  tags?: Tag[];
  created?: Date;
  status?: TaskStatus;
  feedbacks?: Feedback[];
  files?: TaskFile[];
  city: string;
}
