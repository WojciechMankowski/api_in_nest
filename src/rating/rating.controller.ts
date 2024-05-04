import { Body, Controller, Get, Param, Patch } from '@nestjs/common';
import { RatingService } from './rating.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('rating')
@Controller('rating')
export  class RatingController {
    constructor(private readonly ratingService: RatingService) {}

    @Get("")
    getRating() {
        return this.ratingService.getRating()
    }

    @Patch('/all/:id')
    updateData(@Param('id') id: string, @Body() body: {score: string | number}){
        return this.ratingService.update(+body.score, +id)
    }
}