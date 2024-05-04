import { IsNumber, IsString, IsOptional } from 'class-validator';

class Place {
  @IsNumber()
  @IsOptional()
  readonly id: number;
  @IsString() readonly address: string;
  @IsString() readonly name: string;
  @IsNumber() readonly type_place: number;
  @IsString() readonly url_image: string;
  @IsString() readonly url_map_google: string;
}
export default Place;
