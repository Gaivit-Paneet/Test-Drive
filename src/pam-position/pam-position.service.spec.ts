import { Test, TestingModule } from '@nestjs/testing';
import { PamPositionService } from './pam-position.service';

describe('PamPositionService', () => {
  let service: PamPositionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PamPositionService],
    }).compile();

    service = module.get<PamPositionService>(PamPositionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
