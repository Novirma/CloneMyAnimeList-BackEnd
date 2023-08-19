import { Injectable } from '@nestjs/common';
import { CreatePremieredDto } from './dto/create-premiered.dto';
import { UpdatePremieredDto } from './dto/update-premiered.dto';
import { Sequelize } from 'sequelize-typescript';
import { premiered } from 'models/bookmart';

@Injectable()
export class PremieredService {
  constructor(private sequelize: Sequelize) {}

  create(createPremieredDto: CreatePremieredDto) {
    return 'This action adds a new premiered';
  }

  async findAll() {
    try {
      const result: any = await this.sequelize.query(
        'select * from bookmart_anime.premiered order by id',
      );
      let name = result[0];
      console.log(name);

      return result[0];
      // return (result[0][0].name)
    } catch (error) {
      return error.message;
    }
  }

  async findOne(id: any) {
    try {
      const result: any = await this.sequelize.query(
        `select * from bookmart_anime.premiered where premier_id = '${id}'`,
      );
      // if (result.length == 0) throw new Error('Data Premiered/Musim Tidak di Temukan!!')
      if (result[0].length == 0)
        throw new Error('Data Premiered/Musim Tidak di Temukan!!');
      return result[0];
    } catch (error) {
      return error.message;
    }
  }

  async createPremiered(dataBody: any) {
    try {
      const count: any = await this.sequelize.query(
        `select count (premier_id) from bookmart_anime.premiered;`,
      );
      const jumlahData = parseInt(count[0][0].count) + 1;
      // const result = await premiered.create({
      //   premier_id: dataBody.premier_id,
      //   name: dataBody.name,

      // });
      const query = `insert into bookmart_anime.premiered(premier_id,name) values('pr-${jumlahData}','${dataBody.name}')`;
      // console.log(typeof dataBody.name);
      // console.log(parseInt(count[0][0].count)+1);

      const result = await this.sequelize.query(query);
      // console.log(result);

      return {
        status: 200,
        message: 'Data Season Premiered Berhasil di Buat',
      };
    } catch (error) {
      return error.message;
    }
  }

  async update(id: string, dataBody: any) {
    try {
      console.log(id);
      console.log(dataBody.name);

      const result = await premiered.update(
        {
          name: dataBody.name,
        },
        {
          where: {
            // premier_id: dataBody.premier_id,
            premier_id: id,
          },
        },
      );
      return `Data Berhasil di Update`;
    } catch (error) {
      return error.message;
    }
  }

  async remove(id: string) {
    try {
      const result = await premiered.destroy({
        where: {
          premier_id: id,
        },
      });
      return {
        status: 200,
        message: `Data Premiered Id ${id} berhasil di Delete`,
      };
    } catch (error) {
      return error.message;
    }
  }
}
