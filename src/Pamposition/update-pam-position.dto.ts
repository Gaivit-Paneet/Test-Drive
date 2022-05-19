import { PartialType } from '@nestjs/mapped-types';
import { CreatePamPositionDto } from './create-pam-position.dto';

export class UpdatePamPositionDto extends PartialType(CreatePamPositionDto) {}
