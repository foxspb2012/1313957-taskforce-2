import {Entity} from '@taskforce/core';
import {TaskFile} from '@taskforce/shared-types';

export class FileEntity implements Entity<FileEntity>, TaskFile {
  id: number;
  taskId: number;
  filename: string;

  constructor(file: TaskFile) {
    this.fillEntity(file);
  }

  fillEntity(file: TaskFile) {
    this.id = file.id;
    this.taskId = file.taskId;
    this.filename = file.filename;
  }

  toObject(): FileEntity {
    return {...this};
  }
}
