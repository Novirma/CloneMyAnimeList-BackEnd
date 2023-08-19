import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { log } from 'console';
import { diskStorage } from 'multer';
import { AnimeService } from './anime.service';
import { CreateAnimeDto } from './dto/create-anime.dto';
import { UpdateAnimeDto } from './dto/update-anime.dto';

export const storage = {
  storage: diskStorage({
    destination: 'public/gambar',
    filename: (req, file, cb) => {
      const currentDate = new Date();
      const day = String(currentDate.getDate()).padStart(2, '0');
      const month = String(currentDate.getMonth() + 1).padStart(2, '0'); // Ingat bahwa bulan dimulai dari 0 (Januari) hingga 11 (Desember)
      const year = currentDate.getFullYear();
      const originalName = file.originalname;
      cb(null, `Image-${year}${month}${day}-${originalName}`);
    },
  }),
};

@Controller('anime')
export class AnimeController {
  constructor(private readonly animeService: AnimeService) {}

  @Post()
  @UseInterceptors(FileInterceptor('gambar', storage))
  postFile(@Body() dataBody: any, @UploadedFile() file: Express.Multer.File) {
    console.log(dataBody);
    console.log(file);

    return this.animeService.create(dataBody, file);
  }

  @Post('coba-coba')
  coba(@Body() dataBody: any) {
    return this.animeService.cobaCoba(dataBody);
  }

  @Get()
  findAll() {
    return this.animeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.animeService.findOne(id);
  }

  @Patch(':id')
  @UseInterceptors(FileInterceptor('gambar', storage))
  update(
    @Param('id') id: string,
    @Body() updateAnimeDto: UpdateAnimeDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.animeService.update(id, updateAnimeDto, file);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.animeService.remove(+id);
  }
}
