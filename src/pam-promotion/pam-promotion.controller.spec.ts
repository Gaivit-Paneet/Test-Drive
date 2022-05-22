import { Test, TestingModule } from '@nestjs/testing';
import { PamPromotionController } from './pam-promotion.controller';

describe('PamPromotionController', () => {
  let controller: PamPromotionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PamPromotionController],
    }).compile();

    controller = module.get<PamPromotionController>(PamPromotionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
