import { Test, TestingModule } from '@nestjs/testing';
import { BookmartController } from './bookmart.controller';
import { BookmartService } from './bookmart.service';

describe('BookmartController', () => {
  let controller: BookmartController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookmartController],
      providers: [BookmartService],
    }).compile();

    controller = module.get<BookmartController>(BookmartController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
