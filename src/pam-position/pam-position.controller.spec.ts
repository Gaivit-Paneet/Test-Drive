import { Test, TestingModule } from '@nestjs/testing';
import { PamPositionController } from './pam-position.controller';

describe('PamPositionController', () => {
  let controller: PamPositionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PamPositionController],
    }).compile();

    controller = module.get<PamPositionController>(PamPositionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
