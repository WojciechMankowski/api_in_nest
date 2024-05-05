import { createClient } from '@supabase/supabase-js';
import Comment from '../Types/comment';
import Place from '../Types/place';
import Rating from '../Types/rating';
import { User } from 'src/Types/user';


// tabele: comment, opttionchoices, place, rating
// const supabase = createClient(
//     'https://nyyvpojadixruopwdksr.supabase.co',
//     'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im55eXZwb2phZGl4cnVvcHdka3NyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ2Mjg4MDAsImV4cCI6MjAzMDIwNDgwMH0.v3WcTH8xHqT6hBazE_lqH1ZlZFaLhUluMapIS0N_ai0')

class Database {
  private supabase;
  constructor(url: string, apiKey: string) {
    this.supabase = createClient(url, apiKey);
  }

  async getComments(): Promise<Comment | null> {
    const { data, error } = this.supabase.from('comment').select('*');
    if (error) {
      return null;
    }
    return data;
  }

  async getPlace(): Promise<Place | null> {
    const { data, error } = await this.supabase
      .from('place')
      .select('*, rating(*), optionchoices(*)');
    if (error) {
      return null;
    }

    return data;
  }
  async getRating(): Promise<Rating | null> {
    const { data, error } = await this.supabase.from('rating').select('*');
    if (error) {
      return null;
    }
    return data;
  }
  async getRatingByIdPlace(place_id: number) {
    const { data, error } = await this.supabase
      .from('rating')
      .select()
      .eq('place_id', place_id);
    console.log(error);
    if (error) {
      return null;
    }
    return data;
  }
  async addNewPlace(new_data: Place) {
    const { data, error } = await this.supabase
      .from('place')
      .insert(new_data)
      .select();
    if (error) {
      return null;
    }
    const { _, _error } = await this.supabase
      .from('rating')
      .insert({ score: 0, number_of_ratings: 0, place_id: data[0].id });
    if (_error) {
      return null;
    }
    return data;
  }

  async updateRating(new_data, place_id){
    const { data, error } = await this.supabase
    .from('rating')
    .update(new_data)
    .eq('place_id', place_id);
  if (error) {
    return null;
  }
  return data;

  }
  async createUser(new_data: User) {
    const { data, error } = await this.supabase
      .from('users')
      .insert(new_data)
      .select();
    if (error) {
      return null;
    }
    return data;
  }

  async getUser(email: string | null, username: string) {
    const { data, error } = await this.supabase
      .from('users')
      .select()
      .eq('email', email, "username", username);

    if (error) {
      return null;
    }
    return data;}

}

export default Database;
