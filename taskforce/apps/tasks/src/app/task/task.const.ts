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
