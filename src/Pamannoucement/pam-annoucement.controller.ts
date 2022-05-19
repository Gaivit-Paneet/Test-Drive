import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PamAnnoucementService } from './pam-annoucement.service';
import { CreatePamAnnoucementDto } from './create-pam-annoucement.dto';
import { UpdatePamAnnoucementDto } from './update-pam-annoucement.dto';

@Controller('pam-annoucement')
export class PamAnnoucementController {
  constructor(private readonly pamAnnoucementService: PamAnnoucementService) {}

  @Post()
  create(@Body() createPamAnnoucementDto: CreatePamAnnoucementDto) {
    return this.pamAnnoucementService.create(createPamAnnoucementDto);
  }

  @Get()
  findAll() {
    return this.pamAnnoucementService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pamAnnoucementService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePamAnnoucementDto: UpdatePamAnnoucementDto) {
    return this.pamAnnoucementService.update(+id, updatePamAnnoucementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pamAnnoucementService.remove(+id);
  }
}
