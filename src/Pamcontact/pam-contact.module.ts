import { Module } from '@nestjs/common';
import { PamContactController } from "./pam-contact.controller"
import { PamContactService } from "./pam-contact.service"
import {PamContact} from "./pam-contact.entity"
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PamContact])],
  controllers: [PamContactController],
  providers: [PamContactService],
})
export class PamContactModule {}
