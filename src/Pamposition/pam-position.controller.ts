import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PamPositionService } from './pam-position.service';
import { CreatePamPositionDto } from './dto/create-pam-position.dto';
import { UpdatePamPositionDto } from './dto/update-pam-position.dto';

@Controller('pam-position')
export class PamPositionController {
  constructor(private readonly pamPositionService: PamPositionService) {}

  @Post()
  create(@Body() createPamPositionDto: CreatePamPositionDto) {
    return this.pamPositionService.create(createPamPositionDto);
  }

  @Get()
  findAll() {
    return this.pamPositionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pamPositionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePamPositionDto: UpdatePamPositionDto) {
    return this.pamPositionService.update(+id, updatePamPositionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pamPositionService.remove(+id);
  }
}
