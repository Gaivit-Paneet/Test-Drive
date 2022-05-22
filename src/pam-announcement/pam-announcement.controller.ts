import { Controller, Get } from '@nestjs/common';
import { PamAnnouncementService } from './pam-announcement.service';
@Controller('pam-announcement')
export class PamAnnouncementController {
    constructor(private pamAnnouncementService:PamAnnouncementService){}
    @Get()
    findAll(){
        return this.pamAnnouncementService.findAll()
    }
}
