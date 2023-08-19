import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookmartModule } from './bookmart/bookmart.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { PremieredModule } from './premiered/premiered.module';
import { GenresModule } from './genres/genres.module';
import { AnimeModule } from './anime/anime.module';

@Module({
  imports: [
    SequelizeModule.forRootAsync({
      useFactory: () => ({
        dialect: 'postgres',
        host: process.env.HOST,
        port: parseInt(process.env.DB_PORT),
        username: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        models: [],
        autoLoadModels: true,
      }),
    }),
    BookmartModule,
    PremieredModule,
    GenresModule,
    AnimeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
