import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Observable } from 'rxjs';
import { Repository } from 'typeorm';
import { CreatePamContactDto } from './dto/create-pam-contact.dto';
import { PamContact } from './entities/pam-contact.entity';

@Injectable()
export class PamContactService {
//   create(createPamContactDto: CreatePamContactDto) {
//     return 'This action adds a new pamContact';
//   }
  constructor(@InjectRepository(PamContact)
  private readonly pamcontactRepository: Repository<PamContact>
  ){}

  findAll():Promise<PamContact[]> {
    return this.pamcontactRepository.find()
  }

  findOne(id:number):Promise<PamContact>{
    return this.pamcontactRepository.findOne(id);
  }

  createOrUpdate(pamcontact : PamContact):Promise<PamContact>{
    return this.pamcontactRepository.save(pamcontact)
  }
  
//   findOne(id: number) {
//     return `This action returns a #${id} pamContact`;
//   }

//   update(id: number, updatePamContactDto: UpdatePamContactDto) {
//     return `This action updates a #${id} pamContact`;
//   }

//   remove(id: number) {
//     return `This action removes a #${id} pamContact`;
//   }
}
