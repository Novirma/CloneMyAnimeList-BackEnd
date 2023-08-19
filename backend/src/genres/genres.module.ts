import { Module } from '@nestjs/common';
import { GenresService } from './genres.service';
import { GenresController } from './genres.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { genres } from 'models/bookmart';

@Module({
  imports: [SequelizeModule.forFeature([genres])],
  controllers: [GenresController],
  providers: [GenresService],
})
export class GenresModule {}
