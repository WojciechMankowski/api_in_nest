import { Injectable } from '@nestjs/common';
import PlaceAdd from 'src/database/Types/PlaceAdd';
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
  addNewPlace(data: PlaceAdd) {
    return this.db.addNewPlace(data)
  }
}
