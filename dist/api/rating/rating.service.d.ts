export declare class RatingService {
    private db;
    constructor(url: string, key: string);
    getRating(): any;
    update(new_score: number, id: number): Promise<{
        messege: string;
    }>;
}
