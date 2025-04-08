import { IsNotEmpty, IsString, IsOptional, IsBoolean } from 'class-validator';

export class CreateListDto {
  @IsNotEmpty()
  @IsString()
  name: string;
}