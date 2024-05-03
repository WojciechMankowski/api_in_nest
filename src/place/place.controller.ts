import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PlaceService } from './place.service';
import PlaceAdd from 'src/database/Types/PlaceAdd';

@Controller('places')
export  class PlaceController {
    constructor(private readonly placeService: PlaceService) {}

    @Get("")
    getPlaces(){
        return this.placeService.getPlace()
    }
    @Post()
    addNewPlace(@Body() body: PlaceAdd){
        return this.placeService.addNewPlace(body)
    }
}