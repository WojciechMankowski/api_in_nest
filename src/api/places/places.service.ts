import { Injectable } from '@nestjs/common';
import Place from 'src/Types/place';
import Database from 'src/database/connect';

@Injectable()
export class PlaceService {
  private db;

  constructor(url: string,  key: string) {
    this.db = new Database(url, key);
  }

  getPlace(){
    return this.db.getPlace()
  }
  addNewPlace(data: Place) {
    return this.db.addNewPlace(data)
  }
}