import { Test, TestingModule } from '@nestjs/testing';
import { PamPromotionService } from './pam-promotion.service';

describe('PamPromotionService', () => {
  let service: PamPromotionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PamPromotionService],
    }).compile();

    service = module.get<PamPromotionService>(PamPromotionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
