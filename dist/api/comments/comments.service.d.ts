import Comment from 'src/Types/comment';
export declare class CommentsService {
    private db;
    constructor(url: string, key: string);
    getComments(): any;
    addComments(data: Comment): any;
}
