import {Controller, Get, Query, UsePipes, ValidationPipe} from '@nestjs/common';
import {BaseCrudController} from "../common/controller/base-crud.controller";
import {User} from "./entity/user.entity";
import {UserService} from "./user.service";
import {LoginDto} from "./dto/login.dto";

@Controller('user')
export class UserController extends BaseCrudController<User> {
  constructor(private readonly userService: UserService) {
    super(userService);
  }

  @Get('auth/me')
  @UsePipes(new ValidationPipe({ transform: true}))
  async getByEmail(@Query() query: LoginDto): Promise<User | null> {
    return this.userService.getByEmail(query.email);
  }
}
