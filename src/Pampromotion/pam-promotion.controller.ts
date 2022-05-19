import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PamPromotionService } from './pam-promotion.service';
import { CreatePamPromotionDto } from './create-pam-promotion.dto';
import { UpdatePamPromotionDto } from './update-pam-promotion.dto';

@Controller('pam-promotion')
export class PamPromotionController {
  constructor(private readonly pamPromotionService: PamPromotionService) {}

  @Post()
  create(@Body() createPamPromotionDto: CreatePamPromotionDto) {
    return this.pamPromotionService.create(createPamPromotionDto);
  }

  @Get()
  findAll() {
    return this.pamPromotionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.pamPromotionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePamPromotionDto: UpdatePamPromotionDto) {
    return this.pamPromotionService.update(+id, updatePamPromotionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pamPromotionService.remove(+id);
  }
}
