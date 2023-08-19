import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';
import { ValidationPipe } from '@nestjs/common/pipes';
import * as bodyParser from 'body-parser';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT;

  app.enableCors();

  app.useGlobalPipes(new ValidationPipe());

  app.use(bodyParser.urlencoded({ extended: true }));

  await app.listen(port, () => {
    console.log(`Server sedang berjalan di port ${port}`);
  });
}
bootstrap();
