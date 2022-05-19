import { PartialType } from '@nestjs/mapped-types';
import { CreatePamAnnoucementDto } from './create-pam-annoucement.dto';

export class UpdatePamAnnoucementDto extends PartialType(CreatePamAnnoucementDto) {}
