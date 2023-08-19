import { Module } from '@nestjs/common';
import { AnimeService } from './anime.service';
import { AnimeController } from './anime.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { anime, genres_detail } from 'models/bookmart';

@Module({
  imports: [SequelizeModule.forFeature([anime,genres_detail])],
  controllers: [AnimeController],
  providers: [AnimeService],
})
export class AnimeModule {}
