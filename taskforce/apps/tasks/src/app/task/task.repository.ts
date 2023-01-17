import {Injectable} from '@nestjs/common';
import {Prisma, Status} from '@prisma/client';
import {CRUDRepository} from '@taskforce/core';
import {Task, TaskStatus} from '@taskforce/shared-types';
import {PrismaService} from '../prisma/prisma.service';
import {TaskEntity} from './task.entity';

@Injectable()
export class TaskRepository implements CRUDRepository<TaskEntity, number, Task> {
  constructor(private readonly prisma: PrismaService) {
  }

  public async findById(id: number): Promise<Task> {
    const task = await this.prisma.task.findFirst({
      where: {id},
      include: {
        category: true,
        tags: true,
        comments: true,
        responses: true,
      },
    });
    return this.convertTask(task);
  }

  public async findByCategory(categoryId: number): Promise<Task> {
    const task = await this.prisma.task.findMany({
      where: {categoryId},
      include: {
        category: true,
        tags: true,
        comments: true,
        responses: true,
      },
    });
    return this.convertTask(task);
  }

  public async create(item: TaskEntity): Promise<Task> {
    console.log(item);
    const entityData = {...item.toObject()};
    console.log(entityData);
    const newTask = await this.prisma.task.create({
      data: {
        title: entityData.title,
        description: entityData.description,
        authorId: entityData.authorId,
        dueDate: entityData.dueDate,
        picture: entityData.picture,
        address: entityData.address,
        price: new Prisma.Decimal(entityData.price),
        category: {
          connectOrCreate: {
            where: {
              title: entityData.category.title,
            },
            create: {
              title: entityData.category.title,
            },
          },
        },
        tags: {
          connectOrCreate: [
            ...entityData.tags.map((tag) => ({
              where: {
                title: tag.title,
              },
              create:
                {
                  assignedBy: 'user',
                  assignedAt: new Date(),
                  tags: {
                    create: {
                      title: tag.title,
                    },
                  },
                },
            })),
          ],
        },
        comments: {
          connect: [],
        },
        responses: {
          connect: [],
        },
      },
      include: {
        category: true,
        tags: true,
        comments: true,
        responses: true,
      },
    });
    return this.convertTask(newTask);
  }

  public async update(id: number, entity: TaskEntity): Promise<Task> {
    const entityData = {...entity.toObject()};
    const updatedTask = await this.prisma.task.update({
      where: {id},
      data: {
        title: entityData.title,
        description: entityData.description,
        authorId: entityData.authorId,
        dueDate: entityData.dueDate,
        picture: entityData.picture,
        address: entityData.address,
        status: Status[entityData.status],
        price: new Prisma.Decimal(entityData.price),
        category: entityData.category.title
          ? {
            connectOrCreate: {
              where: {
                title: entityData.category.title,
              },
              create: {
                title: entityData.category.title,
              },
            },
          }
          : {},
        tags: {
          connectOrCreate: [
            ...entityData.tags.map((tag) => ({
              where: {
                title: tag.title,
              },
              create: {
                title: tag.title,
              },
            })),
          ],
        },
        comments: {
          connect: [],
        },
        responses: {
          connect: [],
        },
      },
      include: {
        category: true,
        tags: true,
        comments: true,
        responses: true,
      },
    });
    return this.convertTask(updatedTask);
  }

  public async destroy(id: number): Promise<void> {
    await this.prisma.task.delete({where: {id}});
  }

  private convertTask(prismaTask): Task {
    return {
      ...prismaTask,
      price: Number(prismaTask.price),
      status: TaskStatus[prismaTask.status],
      responses:
        prismaTask.responses.length > 0 &&
        prismaTask.responses.map((response) => ({
          ...response,
          price: Number(response.price),
        })),
    };
  }
}
