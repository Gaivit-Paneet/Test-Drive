import { PartialType } from '@nestjs/mapped-types';
import { CreatePamPromotionDto } from './create-pam-promotion.dto';

export class UpdatePamPromotionDto extends PartialType(CreatePamPromotionDto) {}
