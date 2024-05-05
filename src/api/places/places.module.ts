import { Module } from '@nestjs/common';
import { PlaceController } from './places.controller';
import { PlaceService } from './places.service';
import * as dotenv from 'dotenv';

dotenv.config();

@Module({
  controllers: [PlaceController],
  providers: [
    {
      provide: PlaceService,
      useFactory: () => {
        const url = process.env.DATABASE_URL;
        const key = process.env.DATABASE_KEY;
        return new PlaceService(url, key);
      },
    },
  ],
  exports: [PlaceService],
})
export default class PlacesModule {}
