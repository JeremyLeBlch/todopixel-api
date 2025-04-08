import {Injectable} from '@nestjs/common';
import {BaseCrudService} from "../common/service/base-crud.service";
import {Task} from "./entity/task.entity";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {TypeOrmRepository} from "../common/repository/typeorm.repository";

@Injectable()
export class TaskService extends BaseCrudService<Task> {
  constructor(@InjectRepository(Task) private taskRepository: Repository<Task>) {
    super(new TypeOrmRepository(taskRepository));
  }
}
