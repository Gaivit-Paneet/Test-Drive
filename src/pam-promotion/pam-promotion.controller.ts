import { Controller } from '@nestjs/common';
import { PamContactService } from 'src/pam-contact/pam-contact.service';
import { Get } from '@nestjs/common';
@Controller('pam-promotion')
export class PamPromotionController {
    constructor(private pamPromotionService:PamContactService){}
    @Get()
    findAll()
    {
        return this.pamPromotionService.findAll()
    }
}
