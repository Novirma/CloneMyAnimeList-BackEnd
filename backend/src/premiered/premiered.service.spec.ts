import { Test, TestingModule } from '@nestjs/testing';
import { PremieredService } from './premiered.service';

describe('PremieredService', () => {
  let service: PremieredService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PremieredService],
    }).compile();

    service = module.get<PremieredService>(PremieredService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
