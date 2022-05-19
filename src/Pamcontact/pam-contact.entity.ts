import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pamcontact')
export class PamContact {
  @PrimaryGeneratedColumn()
  contact_id: number;

  @Column()
  title: string;

  @Column()
  firstname: string;

  @Column()
  email: string;

  @Column()
  tel: string;

  @Column()
  created_date: string;

  @Column()
  contact_time: string;
}