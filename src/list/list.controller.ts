import {Controller, Get, Param, Query} from '@nestjs/common';
import {BaseCrudController} from "../common/controller/base-crud.controller";
import {List} from "./entity/list.entity";
import {ListService} from "./list.service";

@Controller('list')
export class ListController extends BaseCrudController<List> {
  constructor(private readonly listsService: ListService) {
    super(listsService);
  }

  @Get()
  async getByUserId(@Query('userId') userId: string): Promise<List[]> {
    return this.listsService.getByUserId(userId);
  }
}
