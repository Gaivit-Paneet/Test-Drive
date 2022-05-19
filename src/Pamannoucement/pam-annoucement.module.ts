import { Module } from '@nestjs/common';
import { PamAnnoucementService } from './pam-annoucement.service';
import { PamAnnoucementController } from './pam-annoucement.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports:[TypeOrmModule.forRoot()],
  controllers: [PamAnnoucementController],
  providers: [PamAnnoucementService]
})
export class PamAnnoucementModule {}
