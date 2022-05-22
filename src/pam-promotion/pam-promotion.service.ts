import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PamPromotion } from './entities/pam-promotion.entity';
@Injectable()
export class PamPromotionService {
    constructor(@InjectRepository(PamPromotion) 
    private pamPromotionRepository:Repository<PamPromotion>){}

    findAll():Promise<PamPromotion[]>
    {
        return this.pamPromotionRepository.find()
    }
}
