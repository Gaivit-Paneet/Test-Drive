import { IsEmail, Matches } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('pamposition')
export class PamPosition {
  @PrimaryGeneratedColumn()
  position_id: number;

  @Column()
  position_name: string;

  @Column()
  short_description: string;

  @Column()
  description: string;

  @Column()
  email: string;
  
  @Column()
  locate:string

  @Column()
  position_status:boolean

  @Column()
  start_date:string

  @Column()
  end_date:string

  @Column()
  is_active : boolean

  @Column()
  is_approved : boolean

  @Column()
  user_id : number
}