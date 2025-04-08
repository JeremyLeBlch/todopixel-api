import {DeepPartial, ObjectLiteral, Repository} from 'typeorm';
import { IRepository } from './repository.interface';

export class TypeOrmRepository<T extends ObjectLiteral> implements IRepository<T> {
  constructor(private repository: Repository<T>) {}

  async findAll(): Promise<T[]> {
    return this.repository.find();
  }

  async findOne(id: string): Promise<T> {
    const entity = await this.repository.findOneBy({ id } as any);
    if (!entity) {
      throw new Error(`Entity not found with id: ${id}`);
    }
    return entity;
  }

  async create(createDto: DeepPartial<T>): Promise<T> {
    const entity = this.repository.create(createDto);
    return this.repository.save(entity);
  }

  async update(id: string, updateDto: Partial<T>): Promise<T> {
    await this.repository.update(id, updateDto);
    return this.findOne(id);
  }

  async delete(id: string): Promise<void> {
    await this.repository.delete(id);
  }
}