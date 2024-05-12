"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsModule = void 0;
const common_1 = require("@nestjs/common");
const comments_service_1 = require("./comments.service");
const comments_controller_1 = require("./comments.controller");
let CommentsModule = class CommentsModule {
};
exports.CommentsModule = CommentsModule;
exports.CommentsModule = CommentsModule = __decorate([
    (0, common_1.Module)({
        providers: [{
                provide: comments_service_1.CommentsService,
                useFactory: () => {
                    const url = 'https://izqqkxnkvzaqdowljngm.supabase.co';
                    const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml6cXFreG5rdnphcWRvd2xqbmdtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ2Njk1NDksImV4cCI6MjAzMDI0NTU0OX0.LmtooJsfQ5TmiZ4NPk7yFnQ2jTWKqiUHUdCCtgI9Vvo';
                    return new comments_service_1.CommentsService(url, key);
                }
            }],
        controllers: [comments_controller_1.CommentsController]
    })
], CommentsModule);
//# sourceMappingURL=comments.module.js.map