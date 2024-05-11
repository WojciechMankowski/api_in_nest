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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaceController = void 0;
const common_1 = require("@nestjs/common");
const place_1 = require("../../Types/place");
const swagger_1 = require("@nestjs/swagger");
const places_service_1 = require("./places.service");
let PlaceController = class PlaceController {
    placeService;
    constructor(placeService) {
        this.placeService = placeService;
    }
    getPlaces() {
        return this.placeService.getPlace();
    }
    addNewPlace(body) {
        return this.placeService.addNewPlace(body);
    }
};
exports.PlaceController = PlaceController;
__decorate([
    (0, common_1.Get)(""),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PlaceController.prototype, "getPlaces", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [place_1.default]),
    __metadata("design:returntype", void 0)
], PlaceController.prototype, "addNewPlace", null);
exports.PlaceController = PlaceController = __decorate([
    (0, swagger_1.ApiTags)('places'),
    (0, common_1.Controller)('api/places'),
    __metadata("design:paramtypes", [places_service_1.PlaceService])
], PlaceController);
//# sourceMappingURL=places.controller.js.map