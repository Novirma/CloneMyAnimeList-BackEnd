import { Injectable } from '@nestjs/common';
import { log } from 'console';
import { anime, genres_detail } from 'models/bookmart';
import { Sequelize } from 'sequelize-typescript';
import { CreateAnimeDto } from './dto/create-anime.dto';
import { UpdateAnimeDto } from './dto/update-anime.dto';
import { promises as fsPromises } from 'fs';

@Injectable()
export class AnimeService {
  constructor(private sequelize: Sequelize) {}

  async create(dataBody: any, file: any) {
    try {
      const currentDate = new Date();
      const day = String(currentDate.getDate()).padStart(2, '0');
      const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Ingat bahwa bulan dimulai dari 0 (Januari) hingga 11 (Desember)
      const year = currentDate.getFullYear();
      const query = 'select anime_id from bookmart_anime.anime';
      const data = await this.sequelize.query(query);
      // console.log(day,month,year,typeof(year));
      // console.log(`ANM-${year}${month}${day}000001`);
      console.log(file.filename);

      if (data[0].length == 0) {
        const genre = dataBody.genre;
        const arrGenre = genre.split(',');
        const tabelAnime = await anime.create({
          anime_id: `ANM-${year}${month}${day}000001`,
          title: dataBody.title,
          synopsis: dataBody.synopsis,
          type: dataBody.type,
          episodes: dataBody.episodes,
          episodes_watching: dataBody.episodes_watching,
          status_anime: dataBody.status_anime,
          status_watching: dataBody.status_watching,
          premiered: dataBody.premiered,
          authors: dataBody.authors,
          source: dataBody.source,
          duration: dataBody.duration,
          rating: dataBody.rating,
          url_img: file.filename,
        });

        const arrGenreId = [];
        for (let i = 0; i < arrGenre.length; i++) {
          const idGenre: any = await this.sequelize.query(
            `select genre_id from bookmart_anime.genres where name_genre = '${arrGenre[i]}'`,
          );
          arrGenreId.push(idGenre[0][0].genre_id);
        }

        for (let i = 0; i < arrGenreId.length; i++) {
          const tabelGenres = await genres_detail.create({
            genres_detail_anime_id: `ANM-${year}${month}${day}000001`,
            genres_detail_genre_id: arrGenreId[i],
          });
        }

        return {
          status: 200,
          message: 'Data Anime Berhasil di Create',
        };
      } else {
        const query =
          'select genres_detail_anime_id from bookmart_anime.genres_detail where id = (select max(id) from bookmart_anime.genres_detail)';
        const data: any = await this.sequelize.query(query);
        const idTerakhir = data[0][0].genres_detail_anime_id;
        const splitIdTerakhir = idTerakhir.split('-');
        const angkaIdTerakhir = splitIdTerakhir[1];
        const kodeAngkaIdTerakhir = angkaIdTerakhir.substring(8);
        const angkaIdBaru = parseInt(kodeAngkaIdTerakhir) + 1;
        const angkaIdBaruString = String(angkaIdBaru).padStart(6, '0');
        // const angkaIdTerakhir = idTerakhir.substring(8);
        const genre = dataBody.genre;
        const arrGenre = genre.split(',');
        const tabelAnime = await anime.create({
          anime_id: `ANM-${year}${month}${day}${angkaIdBaruString}`,
          title: dataBody.title,
          synopsis: dataBody.synopsis,
          type: dataBody.type,
          episodes: dataBody.episodes,
          episodes_watching: dataBody.episodes_watching,
          status_anime: dataBody.status_anime,
          status_watching: dataBody.status_watching,
          premiered: dataBody.premiered,
          authors: dataBody.authors,
          source: dataBody.source,
          duration: dataBody.duration,
          rating: dataBody.rating,
          url_img: file.filename,
        });

        const arrGenreId = [];
        for (let i = 0; i < arrGenre.length; i++) {
          const idGenre: any = await this.sequelize.query(
            `select genre_id from bookmart_anime.genres where name_genre = '${arrGenre[i]}'`,
          );
          arrGenreId.push(idGenre[0][0].genre_id);
        }

        for (let i = 0; i < arrGenreId.length; i++) {
          const tabelGenres = await genres_detail.create({
            genres_detail_anime_id: `ANM-${year}${month}${day}${angkaIdBaruString}`,
            genres_detail_genre_id: arrGenreId[i],
          });
        }

        return {
          status: 200,
          message: 'Data Anime Berhasil di Create',
        };
      }
    } catch (error) {
      return error.message;
    }
  }

  async cobaCoba(dataBody: any) {
    console.log(dataBody.genre);
    console.log(typeof dataBody.genre);
    const data = dataBody.genre;
    const arrGenre = data.split(',');
    console.log(arrGenre);
    console.log(arrGenre[0]);

    // const idGenre:any = await this.sequelize.query(`select genre_id from bookmart_anime.genres where name_genre = 'Romance' `)

    // return idGenre[0][0].genre_id
    const arrGenreId = [];
    for (let i = 0; i < arrGenre.length; i++) {
      const idGenre: any = await this.sequelize.query(
        `select genre_id from bookmart_anime.genres where name_genre = '${arrGenre[i]}'`,
      );
      arrGenreId.push(idGenre[0][0].genre_id);
    }
    console.log(arrGenreId);
  }

  async findAll() {
    try {
      const result = await anime.findAll();
      return {
        status: 200,
        message: 'Request Sukses!!',
        result: result,
      };
    } catch (error) {}
  }

  async findOne(id: string) {
    try {
      const result = await anime.findOne({
        where: { anime_id: id },
      });
      if (!result)
        throw new Error(`Data Anime dengan Id ${id} tidak di temukan!!`);
      return {
        status: 200,
        message: 'Request Sukses!!',
        result: result,
      };
    } catch (error) {
      return error.message;
    }
  }

  async update(id: string, dataBody: any, file: any) {
    try {
      const idBody = await anime.findOne({
        where: { anime_id: id },
      });
      // const idBody = await anime.findByPk(id)
      if (!idBody) {
        throw new Error('Data Anime Tidak DiTemukan!!');
      }
      const path = './public/gambar/' + idBody.url_img;
      if (fsPromises.access(path)) {
        await fsPromises.unlink(path);
      }
      const updateAnime = await anime.update(
        {
          title: dataBody.title,
          synopsis: dataBody.synopsis,
          type: dataBody.type,
          episodes: dataBody.episodes,
          episodes_watching: dataBody.episodes_watching,
          status_anime: dataBody.status_anime,
          status_watching: dataBody.status_watching,
          premiered: dataBody.premiered,
          authors: dataBody.authors,
          source: dataBody.source,
          duration: dataBody.duration,
          rating: dataBody.rating,
          url_img: file.filename,
        },
        {
          where: { anime_id: id },
        },
      );
      // console.log(idBody);
      // return idBody
      return {
        status: 200,
        message: `Data Anime Id ${id} telah di update`,
      };
    } catch (error) {
      return error.message;
    }
  }

  remove(id: number) {
    return `This action removes a #${id} anime`;
  }
}
