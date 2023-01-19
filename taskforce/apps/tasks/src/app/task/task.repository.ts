import {Injectable} from '@nestjs/common';
import {Prisma, Status} from '@prisma/client';
import {CRUDRepository} from '@taskforce/core';
import {Task, TaskStatus} from '@taskforce/shared-types';
import {PrismaService} from '../prisma/prisma.service';
import {TaskEntity} from './task.entity';
import {TaskQuery} from './query/task.query';

@Injectable()
export class TaskRepository implements CRUDRepository<TaskEntity, number, Task> {
  constructor(private readonly prisma: PrismaService) {
  }

  public async find({
    category: queryCategory,
    tags: queryTags,
    limit,
    city,
    page,
    sortingDirection,
    sortingOption,
  }: TaskQuery): Promise<Task[]> {
    const tasks = await this.prisma.task.findMany({
      where: {
        category: {
          title: queryCategory,
        },
        tags: {
          some: {
            tagId: {
              in: queryTags,
            },
          },
        },
        address: {
          contains: city,
        },
      },
      orderBy:
        sortingOption === 'createdAt'
          ? {createdAt: sortingDirection}
          : {
            [sortingOption]: {
              _count: sortingDirection,
            },
          },
      include: {
        category: true,
        tags: true,
        _count: {
          select: {comments: true, responses: true},
        },
      },
      take: limit,
      skip: page > 0 ? limit * (page - 1) : undefined,
    });
    return tasks.map((task) => this.convertTask(task));
  }

  public async findById(id: number): Promise<Task> {
    const task = await this.prisma.task.findFirst({
      where: {id},
      include: {
        category: true,
        tags: true,
        _count: {
          select: {comments: true, responses: true},
        },
      },
    });
    return this.convertTask(task);
  }

  public async create(item: TaskEntity): Promise<Task> {
    const entityData = {...item.toObject()};

    // await this.prisma.tag.create({
    //   data: {
    //     ...entityData.tags.map(tag => tag.title)
    //   }
    // });

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
        // tags: {
        //   connectOrCreate: [
        //     ...entityData.tags.map((tag) => ({
        //       where: {
        //         title: tag.title,
        //       },
        //       create: {
        //         title: tag.title,
        //       },
        //     })),
        //   ],
        // },
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
        // tags: {
        //   connectOrCreate: [
        //     ...entityData.tags.map((tag) => ({
        //       where: {
        //         title: tag.title,
        //       },
        //       create: {
        //         title: tag.title,
        //       },
        //     })),
        //   ],
        // },
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
      category: prismaTask.category.title,
      tags: prismaTask.tags.map((tag) => tag.title),
      commentsCount: prismaTask._count?.comments || 0,
      responsesCount: prismaTask._count?.responses || 0,
    };
  }
}
