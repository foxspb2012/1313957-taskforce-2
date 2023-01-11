export interface Feedback {
  id?: number;
  text: string;
  taskId: number;
  score: number;
  userId: string;
  createdAt?: Date;
}
