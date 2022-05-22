import { Module } from '@nestjs/common';
import { PamContactService } from './pam-contact.service';
import { PamContactController } from './pam-contact.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import {PamContact} from "./entities/pam-contact.entity"

@Module({
  imports : [TypeOrmModule.forFeature([PamContact])],
  controllers: [PamContactController],
  providers: [PamContactService]
})
export class PamContactModule {}
