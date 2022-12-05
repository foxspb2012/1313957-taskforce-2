import {TaskStatus, User} from "@taskforce/shared-types";

export class CreateTaskDto {
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
}
