import { IsNumber, IsOptional, IsString } from 'class-validator';

export class User {
  @IsNumber()
  @IsOptional()
  id: number;

  @IsString()
  email: string;
  @IsString()
  username: string
  @IsString()
  password: string;

  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @IsString()
  roles: string[];
}
