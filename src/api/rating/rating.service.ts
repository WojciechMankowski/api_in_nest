import { Injectable } from '@nestjs/common';
import Database from 'src/database/connect';

@Injectable()
export class RatingService {
  private db;

  constructor(url: string,  key: string) {
    this.db = new Database(url, key);
  }

  getRating() {
    return this.db.getRating()
  }

  async update(new_score: number, id: number){
    const data = await this.db.getRatingByIdPlace(id)
    const place_id = data[0].place_id
    const number_of_rating = data[0].number_of_ratings
    const new_data= {
        score: new_score,
        number_of_ratings: number_of_rating+1
    }
    const _data = this.db.updateRating(new_data, place_id) !== null
    const response = _data !== null ? {'messege': "Zmienniono"} : {"messege": "Nastąpił błąd"}
    return response

  }
  
}
