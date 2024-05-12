import { Body, Controller, Get, Post } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { ApiTags } from '@nestjs/swagger';
import Comment from 'src/Types/comment';

@ApiTags("comment")
@Controller('api/comments')
export class CommentsController {
    constructor(private readonly commentService: CommentsService) {}

    @Get('')
    get_comments(){
        return this.commentService.getComments()
    }

    @Post()
    add_comment(@Body() body: Comment){
        return this.commentService.addComments(body)
    }

}
