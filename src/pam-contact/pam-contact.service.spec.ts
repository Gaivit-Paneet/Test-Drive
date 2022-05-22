import { Test, TestingModule } from '@nestjs/testing';
import { PamContactService } from './pam-contact.service';

describe('PamContactService', () => {
  let service: PamContactService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PamContactService],
    }).compile();

    service = module.get<PamContactService>(PamContactService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
