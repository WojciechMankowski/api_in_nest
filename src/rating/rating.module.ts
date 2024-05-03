import { Module } from '@nestjs/common';
import { RatingService } from './rating.service';
import { RatingController } from './rating.controller';

@Module({
  controllers: [RatingController],
  providers: [
    {
      provide: RatingService,
      useFactory: () => {
        const url = 'https://izqqkxnkvzaqdowljngm.supabase.co';
        const key =
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml6cXFreG5rdnphcWRvd2xqbmdtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ2Njk1NDksImV4cCI6MjAzMDI0NTU0OX0.LmtooJsfQ5TmiZ4NPk7yFnQ2jTWKqiUHUdCCtgI9Vvo';
        return new RatingService(url, key);
      },
    },
  ],
  exports: [RatingService],
})
export default class RatingModule {}
