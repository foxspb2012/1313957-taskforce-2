export interface CRUDRepository<E, I, R> {
  create(entity: E): Promise<R>;
  findById(id: I): Promise<R> | null;
  update(id: I, entity: E): Promise<R> | null;
  destroy(id: I): Promise<void> | null;
}
