import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ApiModule } from './api/api.module';
import { LoggerMiddleware } from './auth/logger.middleware';


@Module({
  imports: [ApiModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
