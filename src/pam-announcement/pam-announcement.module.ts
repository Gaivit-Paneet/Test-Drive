import { Module } from '@nestjs/common';
import { PamAnnouncementController } from './pam-announcement.controller';
import { PamAnnouncementService } from './pam-announcement.service';
import { PamAnnouncement } from './entities/pam-announcement.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports : [TypeOrmModule.forFeature([PamAnnouncement])],
  controllers: [PamAnnouncementController],
  providers: [PamAnnouncementService]
})
export class PamAnnouncementModule {}
