import { Controller, Get, Post, Body, Patch, Param, Delete, Put, HttpCode, HttpStatus } from '@nestjs/common';
import { IsEmail, Matches,validate } from 'class-validator';
import { CreatePamContactDto } from './dto/create-pam-contact.dto';
import { PamContact } from './entities/pam-contact.entity';
import { PamContactService } from './pam-contact.service';



@Controller('pam-contact')
export class PamContactController {
  constructor(private readonly pamContactService: PamContactService) {}

  @Get()
  findAll() {
    return this.pamContactService.findAll();
  }

  @Get(":id")
  findPamcontactById(@Param('id') id : number){
    return this.pamContactService.findOne(id)
  }
  

  @Post()
  createPamcontact(@Body() newPamContact : CreatePamContactDto) {
    let newPamContacts = new PamContact()
    newPamContacts.title = newPamContact.title
    newPamContacts.firstname = newPamContact.firstname
    newPamContacts.email = newPamContact.email
    newPamContacts.tel = newPamContact.tel
    newPamContacts.description = newPamContact.description
  }

  @Put(':id')
  updatePamcontact(
    @Param('id') id:number,
    @Body() newPamContact : CreatePamContactDto
    )
  {
    let newPamContacts = this.pamContactService.findOne(id)
    console.log(newPamContacts)
  }
}
