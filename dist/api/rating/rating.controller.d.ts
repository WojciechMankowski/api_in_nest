import { RatingService } from './rating.service';
export declare class RatingController {
    private readonly ratingService;
    constructor(ratingService: RatingService);
    getRating(): any;
    updateData(id: string, body: {
        score: string | number;
    }): Promise<{
        messege: string;
    }>;
}
