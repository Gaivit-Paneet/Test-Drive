import { Test, TestingModule } from '@nestjs/testing';
import { PamContactController } from './pam-contact.controller';
import { PamContactService } from './pam-contact.service';

describe('PamContactController', () => {
  let controller: PamContactController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PamContactController],
      providers: [PamContactService],
    }).compile();

    controller = module.get<PamContactController>(PamContactController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
