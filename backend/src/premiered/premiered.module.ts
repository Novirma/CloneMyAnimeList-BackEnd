import { Module } from '@nestjs/common';
import { PremieredService } from './premiered.service';
import { PremieredController } from './premiered.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { premiered } from 'models/bookmart';

@Module({
  imports: [SequelizeModule.forFeature([premiered])],
  controllers: [PremieredController],
  providers: [PremieredService],
})
export class PremieredModule {}
