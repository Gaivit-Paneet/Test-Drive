import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PamPromotionController } from './pam-promotion.controller';
import { PamPromotionService } from './pam-promotion.service';
import { PamPromotion } from './entities/pam-promotion.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PamPromotion])],
  controllers: [PamPromotionController],
  providers: [PamPromotionService]
})
export class PamPromotionModule {}
