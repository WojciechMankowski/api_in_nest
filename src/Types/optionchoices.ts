import { IsNumber, IsString, IsOptional } from 'class-validator';

class Optionchoices {
  @IsNumber()
  @IsOptional()
  readonly id: number;
  @IsString()
  readonly choice_text: string;
}

export default Optionchoices;
