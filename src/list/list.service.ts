import {Injectable} from '@nestjs/common';
import {BaseCrudService} from "../common/service/base-crud.service";
import {List} from "./entity/list.entity";
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {TypeOrmRepository} from "../common/repository/typeorm.repository";

@Injectable()
export class ListService extends BaseCrudService<List> {
  constructor(@InjectRepository(List) private listsRepository: Repository<List>,) {
    super(new TypeOrmRepository(listsRepository));
  }

  async getByUserId(userId: string): Promise<List[]> {
    return this.listsRepository.find({
      where: { user: { id: userId } },
      relations: ['tasks'],
    });
  }
}
