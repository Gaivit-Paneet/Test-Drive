import { Injectable } from '@nestjs/common';
import { CreatePamAnnoucementDto } from './create-pam-annoucement.dto';
import { UpdatePamAnnoucementDto } from './update-pam-annoucement.dto';

@Injectable()
export class PamAnnoucementService {
  create(createPamAnnoucementDto: CreatePamAnnoucementDto) {
    return 'This action adds a new pamAnnoucement';
  }

  findAll() {
    return `This action returns all pamAnnoucement`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pamAnnoucement`;
  }

  update(id: number, updatePamAnnoucementDto: UpdatePamAnnoucementDto) {
    return `This action updates a #${id} pamAnnoucement`;
  }

  remove(id: number) {
    return `This action removes a #${id} pamAnnoucement`;
  }
}
