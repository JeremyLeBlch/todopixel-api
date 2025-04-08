import {IsBoolean, IsNotEmpty, IsString} from "class-validator";

export class CreateTaskDto {

  @IsNotEmpty()
  listId: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsBoolean()
  completed: boolean;
}