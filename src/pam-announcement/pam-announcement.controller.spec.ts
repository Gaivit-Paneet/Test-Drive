import { Test, TestingModule } from '@nestjs/testing';
import { PamAnnouncementController } from './pam-announcement.controller';

describe('PamAnnouncementController', () => {
  let controller: PamAnnouncementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PamAnnouncementController],
    }).compile();

    controller = module.get<PamAnnouncementController>(PamAnnouncementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
