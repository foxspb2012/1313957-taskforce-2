import {Entity} from '@taskforce/core';
import {Tag} from '@taskforce/shared-types';

export class TaskTagEntity implements Entity<TaskTagEntity>, Tag {
  id: number;
  title: string;

  constructor(tag: Tag) {
    this.fillEntity(tag)
  }

  fillEntity(entity) {
    this.id = entity.id;
    this.title = entity.title;
  }

  toObject(): TaskTagEntity {
    return {...this};
  }
}
