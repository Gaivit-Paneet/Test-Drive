import { Controller, Get, Post, Body, Patch, Param, Delete, Put, HttpCode, HttpStatus } from '@nestjs/common';
import { IsEmail, Matches,validate } from 'class-validator';
import { CreatePamContactDto } from './dto/create-pam-contact.dto';
import { PamContact } from './entities/pam-contact.entity';
import { PamContactService } from './pam-contact.service';



@Controller('pam-contact')
export class PamContactController {
  constructor(private readonly pamContactService: PamContactService) {}

  @Get()
  async findAll():Promise<PamContact[]>{
    return await this.pamContactService.findAll();
  }

  @Get(":id")
  async findPamcontactById(@Param('id') id : string){
    return await this.pamContactService.findOne(+id)
  }
  

  @Post()
  async createPamcontact(@Body() newPamContact : CreatePamContactDto):Promise<PamContact> {
    let newPamContacts = new PamContact()
    newPamContacts.title = newPamContact.title
    newPamContacts.firstname = newPamContact.firstname
    newPamContacts.email = newPamContact.email
    newPamContacts.tel = newPamContact.tel
    newPamContacts.description = newPamContact.description
    return await this.pamContactService.createOrUpdate(newPamContacts)
  }
  @Put(':id')
  async updates(@Param('id') id : string , @Body() newPamContact:CreatePamContactDto):Promise<PamContact>
  {
    let newPamContacts = await this.pamContactService.findOne(+id)
    newPamContact.title = newPamContacts.title
    newPamContact.firstname = newPamContact.firstname
    newPamContact.email = newPamContact.email
    newPamContact.description = newPamContact.description
    return await this.pamContactService.createOrUpdate(newPamContacts)
  }
}
