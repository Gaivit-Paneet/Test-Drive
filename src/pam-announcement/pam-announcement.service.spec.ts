import { Test, TestingModule } from '@nestjs/testing';
import { PamAnnouncementService } from './pam-announcement.service';

describe('PamAnnouncementService', () => {
  let service: PamAnnouncementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PamAnnouncementService],
    }).compile();

    service = module.get<PamAnnouncementService>(PamAnnouncementService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
