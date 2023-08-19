import { Module } from '@nestjs/common';
import { BookmartService } from './bookmart.service';
import { BookmartController } from './bookmart.controller';
import { SequelizeModule } from '@nestjs/sequelize/dist';
import { anime, genres, premiered } from 'models/bookmart';

@Module({
  imports: [SequelizeModule.forFeature([anime, premiered])],
  controllers: [BookmartController],
  providers: [BookmartService],
})
export class BookmartModule {}
