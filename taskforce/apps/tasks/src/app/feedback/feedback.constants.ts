export enum FeedbackText {
  MIN = 10,
  MAX = 300,
}

export enum CreateFeedbackError {
  FEEDBACK_TOO_SHORT = 'Feedback text is too short',
  FEEDBACK_TOO_LONG = 'Feedback text is too long',
  TASK_DOESNT_EXIST = 'Task doesnt exist',
}
