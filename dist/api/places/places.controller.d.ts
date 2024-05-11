import Place from 'src/Types/place';
import { PlaceService } from './places.service';
export declare class PlaceController {
    private readonly placeService;
    constructor(placeService: PlaceService);
    getPlaces(): any;
    addNewPlace(body: Place): any;
}
