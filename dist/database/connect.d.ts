import Comment from '../Types/comment';
import Place from '../Types/place';
import Rating from '../Types/rating';
import { User } from 'src/Types/user';
declare class Database {
    private supabase;
    constructor(url: string, apiKey: string);
    getComments(): Promise<Comment | null>;
    getPlace(): Promise<Place | null>;
    getRating(): Promise<Rating | null>;
    getRatingByIdPlace(place_id: number): Promise<any>;
    addNewPlace(new_data: Place): Promise<any>;
    updateRating(new_data: any, place_id: any): Promise<any>;
    createUser(new_data: User): Promise<any>;
    getUser(email: string | null, username: string): Promise<any>;
    addComment(new_data: Comment): Promise<any>;
}
export default Database;
