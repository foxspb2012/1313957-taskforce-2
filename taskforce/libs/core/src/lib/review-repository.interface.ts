export interface ReviewRepository<E, I, R> {
  create(item: E): Promise<R>;
  findByTaskId(id: I): Promise<R[]| null>;
}
