import { Injectable } from '@nestjs/common';
import Database from 'src/database/connect';
import Comment from 'src/Types/comment';

@Injectable()
export class CommentsService {
    private db;

    constructor(url: string,  key: string) {
      this.db = new Database(url, key);
    }

    getComments(){
        return this.db.getComments()
    }

    addComments(data: Comment){
        return this.db.addComment(data)
    }
}
