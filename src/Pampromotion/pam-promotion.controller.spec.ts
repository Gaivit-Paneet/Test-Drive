import { Test, TestingModule } from '@nestjs/testing';
import { PamPromotionController } from './pam-promotion.controller';
import { PamPromotionService } from './pam-promotion.service';

describe('PamPromotionController', () => {
  let controller: PamPromotionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PamPromotionController],
      providers: [PamPromotionService],
    }).compile();

    controller = module.get<PamPromotionController>(PamPromotionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
