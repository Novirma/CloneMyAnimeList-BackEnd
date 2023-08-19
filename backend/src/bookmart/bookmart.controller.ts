import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BookmartService } from './bookmart.service';
import { CreateBookmartDto } from './dto/create-bookmart.dto';
import { UpdateBookmartDto } from './dto/update-bookmart.dto';

@Controller('bookmart')
export class BookmartController {
  constructor(private readonly bookmartService: BookmartService) {}

  @Post()
  create(@Body() createBookmartDto: CreateBookmartDto) {
    return this.bookmartService.create(createBookmartDto);
  }

  @Get()
  findAll() {
    return this.bookmartService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.bookmartService.findOne(+id);
  // }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateBookmartDto: UpdateBookmartDto,
  ) {
    return this.bookmartService.update(+id, updateBookmartDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookmartService.remove(+id);
  }
}
