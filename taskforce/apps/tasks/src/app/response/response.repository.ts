import {Injectable} from '@nestjs/common/decorators';
import {Prisma} from '@prisma/client';
import {CRUDRepository} from '@taskforce/core';
import {Response} from '@taskforce/shared-types';
import {PrismaService} from '../prisma/prisma.service';
import {ResponseEntity} from './response.entity';

@Injectable()
export class ResponseRepository
  implements CRUDRepository<ResponseEntity, number, Response> {
  constructor(private readonly prisma: PrismaService) {
  }

  public async findByTaskId(taskId: number): Promise<Response[]> {
    const responses = await this.prisma.response.findMany({
      where: {taskId},
    });

    return responses.map((response) => ({
      ...response,
      price: Number(response.price),
    }));
  }

  public async create(item: ResponseEntity): Promise<Response> {
    const newResponse = await this.prisma.response.create({
      data: {
        text: item.text,
        userId: item.userId,
        price: item.price && new Prisma.Decimal(item.price),
        task: {connect: {id: item.taskId}},
      },
    });

    return {...newResponse, price: Number(newResponse.price)};
  }

  public findById(id: number): Promise<Response> {
    return Promise.resolve(undefined);
  }

  public update(id: number, item: ResponseEntity): Promise<Response> {
    return Promise.resolve(undefined);
  }

  public destroy(id: number): Promise<void> {
    return Promise.resolve(undefined);
  }
}
