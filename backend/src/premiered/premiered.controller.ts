import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PremieredService } from './premiered.service';
import { CreatePremieredDto } from './dto/create-premiered.dto';
import { UpdatePremieredDto } from './dto/update-premiered.dto';

@Controller('premiered')
export class PremieredController {
  constructor(private readonly premieredService: PremieredService) {}

  @Post()
  create(@Body() createPremieredDto: CreatePremieredDto) {
    return this.premieredService.createPremiered(createPremieredDto);
  }

  @Get()
  findAll() {
    return this.premieredService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: any) {
    return this.premieredService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updatePremieredDto: UpdatePremieredDto,
  ) {
    return this.premieredService.update(id, updatePremieredDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.premieredService.remove(id);
  }
}
