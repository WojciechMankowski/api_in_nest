import { Module } from '@nestjs/common';
import { RatingModule } from './rating/rating.module';
import PlacesModule from './places/places.module';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [PlacesModule, RatingModule, CommentsModule],
  controllers: [],
  providers: [],
})
export class ApiModule {}
