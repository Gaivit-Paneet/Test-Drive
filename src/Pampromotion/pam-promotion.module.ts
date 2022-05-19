import { Module } from '@nestjs/common';
import { PamPromotionService } from './pam-promotion.service';
import { PamPromotionController } from './pam-promotion.controller';
@Module({
  controllers: [PamPromotionController],
  providers: [PamPromotionService]
})
export class PamPromotionModule {}
