import { Module } from '@nestjs/common';
import { PamPositionService } from './pam-position.service';
import { PamPositionController } from './pam-position.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports:[TypeOrmModule.forRoot()],
  controllers: [PamPositionController],
  providers: [PamPositionService]
})
export class PamPositionModule {}
