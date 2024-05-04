import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import  PlaceModule from './place/place.module'; 
import RatingModule from './rating/rating.module';


@Module({
  imports: [PlaceModule, RatingModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
