import { Test, TestingModule } from '@nestjs/testing';
import { PamAnnoucementController } from './pam-annoucement.controller';
import { PamAnnoucementService } from './pam-annoucement.service';

describe('PamAnnoucementController', () => {
  let controller: PamAnnoucementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PamAnnoucementController],
      providers: [PamAnnoucementService],
    }).compile();

    controller = module.get<PamAnnoucementController>(PamAnnoucementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
