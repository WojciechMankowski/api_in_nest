import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import Place from 'src/Types/place';
import { ApiTags } from '@nestjs/swagger';
import { PlaceService } from './places.service';

@ApiTags('places')
@Controller('api/places')
export  class PlaceController {
    constructor(private readonly placeService: PlaceService) {}

    @Get("")
    getPlaces(){
        return this.placeService.getPlace()
    }
    @Post()
    addNewPlace(@Body() body: Place){
        return this.placeService.addNewPlace(body)
    }
}