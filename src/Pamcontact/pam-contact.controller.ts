import { Controller, Get, Post } from '@nestjs/common';
import { PamContactService } from './pam-contact.service';
import { PamContact } from './pam-contact.entity';

@Controller()
export class PamContactController {
  constructor(private readonly pamContactService: PamContactService) {}

  @Get()
  GetAll() : Promise<PamContact[]> {
    return this.pamContactService.getAll();
  }

}
