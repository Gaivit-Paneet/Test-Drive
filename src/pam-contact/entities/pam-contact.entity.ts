import { IsEmail, Matches } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pamcontact')
export class PamContact {
  @PrimaryGeneratedColumn()
  contact_id : number

  @Column()
  title: string;

  @Column()
  firstname: string;

  @Column()
  
  email: string;

  @Column()
  tel: string;
  
  @Column()
  description:string

  @Column()
  created_date:Date

  @Column()
  contact_time:Date
}