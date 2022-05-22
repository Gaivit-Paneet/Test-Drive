import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule,TypeOrmModuleOptions } from '@nestjs/typeorm';
import { PamContactModule } from './pam-contact/pam-contact.module';
import { PamContact } from './pam-contact/entities/pam-contact.entity';

import { PamPosition } from './pam-position/entities/pam-position.entity';
import { PamPositionModule } from './pam-position/pam-position.module';

import { PamAnnouncementModule } from './pam-announcement/pam-announcement.module';
import { PamAnnouncement } from './pam-announcement/entities/pam-announcement.entity';


@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '123456',
    database: 'pamconpa',
    entities: [PamContact,PamPosition,PamPosition,PamAnnouncement],
    synchronize: false
      }),PamContactModule,PamPositionModule, PamAnnouncementModule, PamAnnouncementModule
    ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
