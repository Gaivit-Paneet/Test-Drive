import { Injectable } from '@nestjs/common';
import { CreatePamPromotionDto } from './create-pam-promotion.dto';
import { UpdatePamPromotionDto } from './update-pam-promotion.dto';

@Injectable()
export class PamPromotionService {
  create(createPamPromotionDto: CreatePamPromotionDto) {
    return 'This action adds a new pamPromotion';
  }

  findAll() {
    return `This action returns all pamPromotion`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pamPromotion`;
  }

  update(id: number, updatePamPromotionDto: UpdatePamPromotionDto) {
    return `This action updates a #${id} pamPromotion`;
  }

  remove(id: number) {
    return `This action removes a #${id} pamPromotion`;
  }
}
