import {Entity} from '@taskforce/core';
import {Task, TaskStatus, Category, Comment, Response, Tag} from '@taskforce/shared-types';
import * as dayjs from 'dayjs';

export class TaskEntity implements Entity<TaskEntity>, Task {
  public title: string;
  public description: string;
  public category: Category;
  public authorId: string;
  public contractorId: string;
  public status: TaskStatus;
  public price?: number;
  public dueDate?: Date;
  public picture?: string;
  public address?: string;
  public tags?: Tag[];
  public comments?: Comment[];
  public responses?: Response[];

  constructor(task: Task) {
    this.fillEntity(task);
  }

  public toObject() {
    return {
      ...this,
      dueDate: this.dueDate ? dayjs(this.dueDate).toDate() : null,
      price: this.price || 0,
      category: this.category ? { title: this.category } : {},
      tags: this.tags ? this.tags.map((tag) => ({title: tag.toLowerCase()})) : [],
      comments: this.comments ? this.comments.map(({id}) => ({id})) : [],
      responses: this.responses ? this.responses.map(({id}) => ({id})) : [],
    };
  }

  public fillEntity(item: Task) {
    this.title = item.title;
    this.description = item.description;
    this.category = item.category;
    this.authorId = item.authorId;
    this.contractorId = item.contractorId;
    this.status = item.status;
    this.price = item.price;
    this.dueDate = item.dueDate;
    this.picture = item.picture;
    this.address = item.address;
    this.tags = item.tags;
    this.comments = item.comments;
    this.responses = item.responses;
  }
}
