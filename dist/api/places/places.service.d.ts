import Place from 'src/Types/place';
export declare class PlaceService {
    private db;
    constructor(url: string, key: string);
    getPlace(): any;
    addNewPlace(data: Place): any;
}
