import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ListModule} from './list/list.module';
import {TaskModule} from './task/task.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ConfigModule} from '@nestjs/config';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'db_todolist_next_nest',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
      logging: true
    }),
    ListModule,
    TaskModule,
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}