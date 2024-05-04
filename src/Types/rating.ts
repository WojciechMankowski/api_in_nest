import { IsNumber, IsOptional } from "class-validator";

class Rating {
 @IsNumber() @IsOptional()  readonly id: number;
  @IsNumber() readonly number_of_ratings: number 
  @IsNumber() readonly place_id: number 
  @IsNumber() readonly score: number 
}
export default Rating;
