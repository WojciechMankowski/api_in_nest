import { Module } from '@nestjs/common';
import { RatingModule } from './rating/rating.module';
import PlacesModule from './places/places.module';

@Module({
  imports: [PlacesModule, RatingModule],
  controllers: [],
  providers: [],
})
export class ApiModule {}
