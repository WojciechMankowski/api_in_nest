"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RatingService = void 0;
const common_1 = require("@nestjs/common");
const connect_1 = require("../../database/connect");
let RatingService = class RatingService {
    db;
    constructor(url, key) {
        this.db = new connect_1.default(url, key);
    }
    getRating() {
        return this.db.getRating();
    }
    async update(new_score, id) {
        const data = await this.db.getRatingByIdPlace(id);
        const place_id = data[0].place_id;
        const number_of_rating = data[0].number_of_ratings;
        const new_data = {
            score: new_score,
            number_of_ratings: number_of_rating + 1
        };
        const _data = this.db.updateRating(new_data, place_id) !== null;
        const response = _data !== null ? { 'messege': "Zmienniono" } : { "messege": "Nastąpił błąd" };
        return response;
    }
};
exports.RatingService = RatingService;
exports.RatingService = RatingService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [String, String])
], RatingService);
//# sourceMappingURL=rating.service.js.map