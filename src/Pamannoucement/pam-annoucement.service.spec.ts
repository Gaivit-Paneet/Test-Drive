import { Test, TestingModule } from '@nestjs/testing';
import { PamAnnoucementService } from './pam-annoucement.service';

describe('PamAnnoucementService', () => {
  let service: PamAnnoucementService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PamAnnoucementService],
    }).compile();

    service = module.get<PamAnnoucementService>(PamAnnoucementService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
