import { Test, TestingModule } from '@nestjs/testing';
import { PamPositionController } from './pam-position.controller';
import { PamPositionService } from './pam-position.service';

describe('PamPositionController', () => {
  let controller: PamPositionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PamPositionController],
      providers: [PamPositionService],
    }).compile();

    controller = module.get<PamPositionController>(PamPositionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
