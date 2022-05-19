import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PamContactModule } from './Pamcontact/pam-contact.module';
import { PamPositionModule } from './Pamposition/pam-position.module';
import { PamPromotionModule } from './Pampromotion/pam-promotion.module';
import { PamAnnoucementModule } from './Pamannoucement/pam-annoucement.module';
@Module({
  imports: [TypeOrmModule.forRoot({
    name: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123456',
    database: 'pamconpa',
    synchronize: false
  }), PamContactModule,PamPositionModule,PamAnnoucementModule,PamPromotionModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
