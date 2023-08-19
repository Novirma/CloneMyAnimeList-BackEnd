import { PartialType } from '@nestjs/mapped-types';
import { CreateBookmartDto } from './create-bookmart.dto';

export class UpdateBookmartDto extends PartialType(CreateBookmartDto) {}
