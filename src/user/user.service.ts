import { Injectable } from '@nestjs/common';
import {BaseCrudService} from "../common/service/base-crud.service";
import {User} from "./entity/user.entity";
import {Repository} from "typeorm";
import {InjectRepository} from "@nestjs/typeorm";
import {TypeOrmRepository} from "../common/repository/typeorm.repository";

@Injectable()
export class UserService extends BaseCrudService<User> {
  constructor(@InjectRepository(User) private userRepository: Repository<User>) {
    super(new TypeOrmRepository(userRepository));
  }

  async getByEmail(email: string): Promise<User | null> {
    return this.userRepository.findOne({ where: { email } });
  }

}
