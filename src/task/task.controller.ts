import { Controller } from '@nestjs/common';
import {BaseCrudController} from "../common/controller/base-crud.controller";
import {Task} from "./entity/task.entity";
import {TaskService} from "./task.service";

@Controller('task')
export class TaskController extends BaseCrudController<Task> {
  constructor(private readonly taskService: TaskService) {
    super(taskService);
  }
}
