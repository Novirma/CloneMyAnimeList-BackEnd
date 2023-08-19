import { Injectable } from '@nestjs/common';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { Sequelize } from 'sequelize-typescript';
import { genres } from 'models/bookmart';
import { log } from 'console';

@Injectable()
export class GenresService {
  constructor(private sequelize: Sequelize) {}

  async create(dataBody: any) {
    try {
      const data = await this.sequelize.query(
        'select genre_id from bookmart_anime.genres',
      );
      console.log(data[0]);
      console.log(data[0].length);
      if (data[0].length == 0) {
        console.log('Data Pertama');
        const result = await genres.create({
          genre_id: 'genre-001',
          name_genre: dataBody.name_genre,
          information: dataBody.information,
        });
        return {
          status: 200,
          message: `Genre ${dataBody.name_genre} berhasil di buat`,
        };
      } else {
        const data: any = await this.sequelize.query(
          'select genre_id from bookmart_anime.genres where id = (select max(id) from bookmart_anime.genres) ',
        );
        console.log(data);
        const idTerakhir = data[0][0].genre_id;
        console.log(idTerakhir);
        const splitIdTerakhir = idTerakhir.split('-');
        const angkaIdBaru = parseInt(splitIdTerakhir[1]) + 1;
        const angkaIdBaruString = String(angkaIdBaru).padStart(3, '0');

        const result = await genres.create({
          genre_id: `genre-${angkaIdBaruString}`,
          name_genre: dataBody.name_genre,
          information: dataBody.information,
        });
        return {
          status: 200,
          message: `Genre ${dataBody.name_genre} berhasil di buat`,
        };
      }

      // const result = await genres.create({
      //   name_genre : "Action",
      //   information : "Ini adalah Genre yang di sukai semua orang"
      // })
    } catch (error) {
      return error.message;
    }
  }

  async findAll() {
    try {
      const query = 'select * from bookmart_anime.genres order by id';
      const result = await this.sequelize.query(query);
      return {
        status: 200,
        message: 'Data Genres Berhasil di Dapatkan',
        result: result[0],
      };
    } catch (error) {
      return error.message;
    }
  }

  async findOne(id: string) {
    try {
      const result = await genres.findOne({
        where: { genre_id: id },
      });
      if (!result) throw new Error(`Data Genre Id ${id} tidak di temukan`);
      return {
        status: 200,
        message: 'Data Genre Sukses di Temukan',
        result: result,
      };
    } catch (error) {
      return error.message;
    }
  }

  async update(id: string, dataBody: any) {
    try {
      const idBody = await genres.findOne({
        where: { genre_id: id },
      });
      if (!idBody) throw new Error(`Data Genre Id  tidak di temukan`);
      const query = `update bookmart_anime.genres 
      set name_genre = '${dataBody.name_genre}',information = '${dataBody.information}'
      where genre_id = '${id}' `;
      const result = await this.sequelize.query(query);
      return {
        status: 200,
        message: 'Data Genre Berhasil di Update',
      };
    } catch (error) {
      return error.message;
    }
  }

  async remove(id: string) {
    try {
      const idBody = await genres.findOne({
        where: {
          genre_id: id,
        },
      });
      if (!idBody) throw new Error(`Data Genre Id  tidak di temukan`);
      const result = await genres.destroy({
        where: {
          genre_id: id,
        },
      });
      return {
        status: 200,
        message: 'Data Genres Berhasil di hapus!',
      };
    } catch (error) {}
  }
}
