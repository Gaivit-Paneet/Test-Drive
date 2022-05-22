import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreatPamPositionDto } from './dto/create-pam-position.dto';
import { PamPosition } from './entities/pam-position.entity';
@Injectable()
export class PamPositionService {
    constructor(@InjectRepository(PamPosition) 
    private pamPositionRepository : Repository<PamPosition>){}
    findAll():Promise<PamPosition[]>
    {
        return this.pamPositionRepository.find()
    }
    
}
