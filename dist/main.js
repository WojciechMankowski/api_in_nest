"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const dotenv = require("dotenv");
const auth_guard_1 = require("./auth/auth.guard");
dotenv.config();
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalGuards(new auth_guard_1.AuthGuard());
    const options = new swagger_1.DocumentBuilder()
        .setTitle('API dostępny świat dla wysztkich')
        .setVersion('1.0')
        .addTag('API')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('dosc', app, document);
    app.useGlobalPipes(new common_1.ValidationPipe());
    app.enableCors({ origin: true, methods: ['GET', 'POST', 'PUT', 'DELETE'],
        allowedHeaders: ['Content-Type', 'Origin', 'X-Requested-With', 'Accept',
            'Authorization', 'x-api-key'],
        exposedHeaders: ['Authorization'],
        credentials: true,
    });
    await app.listen(process.env.PORT || 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map