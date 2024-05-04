import { IsNumber, IsString, IsOptional } from 'class-validator';

class Comment {
  @IsNumber()
  @IsOptional()
  readonly id: number;
  @IsString() readonly content: string 
  @IsString() readonly date: string 
  @IsString() readonly user_name: string 
  @IsNumber() readonly place_id: number
}

export default Comment;
