import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PamAnnouncement } from './entities/pam-announcement.entity'; 

@Injectable()
export class PamAnnouncementService {
    constructor(@InjectRepository(PamAnnouncement) 
    private pamAnnouncementRepository : Repository<PamAnnouncement>){}

    findAll():Promise<PamAnnouncement[]>
    {
        return this.pamAnnouncementRepository.find()
    }
}
