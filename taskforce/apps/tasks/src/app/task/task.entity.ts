import {Task, TaskStatus} from '@taskforce/shared-types';
import {TASK_DEFAULT} from "./task.const";
import {User} from "@taskforce/shared-types";

export class TaskEntity implements Task {
  public _id: string;
  public title: string;
  public description: string;
  public category: string;
  public author: User;
  public creationDate: Date;
  public status: TaskStatus;
  public price?: number;
  public dueDate?: Date;
  public picture?: string;
  public address?: string;
  public tags?: string[];

  constructor(task: Task) {
    this.fillEntity(task);
  }

  public toObject() {
    return {...this};
  }

  public fillEntity(task: Task) {
    this._id = task._id;
    this.title = task.title;
    this.description = task.description;
    this.category = task.category;
    this.author = task.author;
    this.creationDate = task.creationDate;
    this.status = task.status || TASK_DEFAULT.STATUS;
    this.price = task.price || TASK_DEFAULT.PRICE;
    this.dueDate = task.dueDate || TASK_DEFAULT.DUE_DATE;
    this.picture = task.picture || TASK_DEFAULT.PICTURE;
    this.address = task.address || TASK_DEFAULT.ADDRESS;
    this.tags = task.tags|| TASK_DEFAULT.TAGS;
  }
}
