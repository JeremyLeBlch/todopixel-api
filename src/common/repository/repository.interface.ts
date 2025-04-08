import {DeepPartial, ObjectLiteral} from "typeorm";

export interface IRepository<T> extends ObjectLiteral {
  findAll(): Promise<T[]>;
  findOne(id: string): Promise<T | null>;
  create(createDto: DeepPartial<T> | Partial<T>): Promise<T>;
  update(id: string, updateDto: DeepPartial<T> | Partial<T>): Promise<T>;
  delete(id: string): Promise<void>;
}