import { CommentsService } from './comments.service';
import Comment from 'src/Types/comment';
export declare class CommentsController {
    private readonly commentService;
    constructor(commentService: CommentsService);
    get_comments(): any;
    add_comment(body: Comment): any;
}
