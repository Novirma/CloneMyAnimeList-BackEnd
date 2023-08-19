import { PartialType } from '@nestjs/mapped-types';
import { CreatePremieredDto } from './create-premiered.dto';

export class UpdatePremieredDto extends PartialType(CreatePremieredDto) {}
