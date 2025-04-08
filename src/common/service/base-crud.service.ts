import { DeepPartial, ObjectLiteral } from 'typeorm';
import {IRepository} from "../repository/repository.interface";

export class BaseCrudService<T extends ObjectLiteral> {
  constructor(private repository: IRepository<T>) {}

  async findAll(): Promise<T[]> {
    return this.repository.findAll();
  }

  async findOne(id: string): Promise<T | null> {
    return this.repository.findOne(id);
  }

  async create(createDto: DeepPartial<T> | Partial<T>): Promise<T> {
    return this.repository.create(createDto);
  }

  async update(id: string, updateDto: DeepPartial<T> | Partial<T>): Promise<T> {
    return this.repository.update(id, updateDto);
  }

  async remove(id: string): Promise<void> {
    return this.repository.delete(id);
  }
}