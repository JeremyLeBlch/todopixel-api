import {Controller, Get, Post, Body, Param, Delete, Put} from '@nestjs/common';
import {DeepPartial, ObjectLiteral} from 'typeorm';
import {BaseCrudService} from "../service/base-crud.service";

@Controller('crud')
export class BaseCrudController<T extends ObjectLiteral> {
  constructor(private readonly baseCrudService: BaseCrudService<T>) {
  }

  @Get()
  async findAll(): Promise<T[]> {
    return this.baseCrudService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<T | null> {
    return this.baseCrudService.findOne(id);
  }

  @Post()
  async create(@Body() createDto: DeepPartial<T>): Promise<T> {
    return this.baseCrudService.create(createDto);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateDto: Partial<T>,
  ): Promise<T> {
    return this.baseCrudService.update(id, updateDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.baseCrudService.remove(id);
  }
}