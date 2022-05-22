import { Controller, Get } from '@nestjs/common';
import { PamPositionService } from './pam-position.service';

@Controller('pam-position')

export class PamPositionController {
    constructor(
        private readonly pamPositionService:PamPositionService
    ){}

    @Get()
    findAll()
    {
        return this.pamPositionService.findAll()
    }
}
