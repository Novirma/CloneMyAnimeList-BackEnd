import { Injectable } from '@nestjs/common';
import { genres, premiered } from 'models/bookmart';
import { CreateBookmartDto } from './dto/create-bookmart.dto';
import { UpdateBookmartDto } from './dto/update-bookmart.dto';
import { Sequelize } from 'sequelize-typescript';

@Injectable()
export class BookmartService {
  constructor(private sequelize: Sequelize) {}

  create(createBookmartDto: CreateBookmartDto) {
    return 'This action adds a new bookmart';
  }

  async findAll(): Promise<any> {
    try {
      // const result = await premiered.findAll();
      const result = await this.sequelize.query(
        'select * from bookmart_anime.anime',
      );
      // console.log(result);

      return result[0];
    } catch (error) {
      return error.message;
    }
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} bookmart`;
  // }

  update(id: number, updateBookmartDto: UpdateBookmartDto) {
    return `This action updates a #${id} bookmart`;
  }

  remove(id: number) {
    return `This action removes a #${id} bookmart`;
  }
}
