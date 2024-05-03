import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import  PlaceModule from './place/place.module'; 
import RatingModule from './rating/rating.module';


@Module({
  imports: [PlaceModule, RatingModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
