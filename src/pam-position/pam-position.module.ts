import { Module } from '@nestjs/common';
import { PamPositionController } from './pam-position.controller';
import { PamPositionService } from './pam-position.service';
import { PamPosition } from './entities/pam-position.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports : [TypeOrmModule.forFeature([PamPosition])],
  controllers: [PamPositionController],
  providers: [PamPositionService]
})
export class PamPositionModule {}
