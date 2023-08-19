import { Test, TestingModule } from '@nestjs/testing';
import { BookmartService } from './bookmart.service';

describe('BookmartService', () => {
  let service: BookmartService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookmartService],
    }).compile();

    service = module.get<BookmartService>(BookmartService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
