import { Test, TestingModule } from '@nestjs/testing';
import { PremieredController } from './premiered.controller';
import { PremieredService } from './premiered.service';

describe('PremieredController', () => {
  let controller: PremieredController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PremieredController],
      providers: [PremieredService],
    }).compile();

    controller = module.get<PremieredController>(PremieredController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
