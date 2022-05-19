import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PamContact } from "./pam-contact.entity";

@Injectable()
export class PamContactService {
  constructor(@InjectRepository(PamContact) private readonly pamContact: Repository<PamContact>)
  {}
  async getAll() : Promise<PamContact[]>
  {
    return await this.pamContact.find()
  }
}
