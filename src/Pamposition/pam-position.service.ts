import { Injectable } from '@nestjs/common';
import { CreatePamPositionDto } from './create-pam-position.dto';
import { UpdatePamPositionDto } from './update-pam-position.dto';

@Injectable()
export class PamPositionService {
  create(createPamPositionDto: CreatePamPositionDto) {
    return 'This action adds a new pamPosition';
  }

  findAll() {
    return `This action returns all pamPosition`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pamPosition`;
  }

  update(id: number, updatePamPositionDto: UpdatePamPositionDto) {
    return `This action updates a #${id} pamPosition`;
  }

  remove(id: number) {
    return `This action removes a #${id} pamPosition`;
  }
}
