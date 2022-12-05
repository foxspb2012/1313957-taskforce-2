import {TaskStatus} from '@taskforce/shared-types';
import * as dayjs from 'dayjs';

export const TASK_DEFAULT = {
  PRICE: 0,
  DUE_DATE: dayjs().toDate(),
  PICTURE: '',
  ADDRESS: '',
  TAGS: [],
  STATUS: TaskStatus.New,
};

export const TASK_NOT_FOUND_ERROR = 'Task not found';
export const TASKS_BY_CATEGORY_NOT_FOUND_ERROR = 'Tasks by this category not found';
