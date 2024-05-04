import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv'

dotenv.config()

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //  ustawienie wyświetlania swagger
  const options = new DocumentBuilder()
    .setTitle('API dostępny świat dla wysztkich')
    .setVersion('1.0')
    .addTag('API')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('doc', app, document);

  // ustawienie walidacji danych globalnie
  app.useGlobalPipes(new ValidationPipe())


  await app.listen(process.env.PORT || 3000);
}
bootstrap();
