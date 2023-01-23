export const TaskStatus: {
  New: 'New',
  Rejected: 'Rejected',
  InProgress: 'InProgress',
  Completed: 'Completed',
  Failed: 'Failed',
} = {
  New: 'New',
  Rejected: 'Rejected',
  InProgress: 'InProgress',
  Completed: 'Completed',
  Failed: 'Failed',
}

export type TaskStatus = typeof TaskStatus[keyof typeof TaskStatus];
