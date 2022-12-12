export interface CommentRepository<E, I, R> {
  create(item: E): Promise<R>;
  findByTaskId(id: I): Promise<R[]| null>;
  destroy(id: I):  Promise<void>;
}
