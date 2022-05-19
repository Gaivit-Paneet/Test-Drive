import { IsEmail, IsInt, IsNotEmpty, Matches } from "class-validator";
import { Entity,Column,PrimaryGeneratedColumn } from "typeorm";
import { Transform } from 'class-transformer';
import { moveMessagePortToContext } from "worker_threads";

@Entity()
export class PamPosition {

    @Column()
    @IsNotEmpty()
    position_name : string

    @Column()
    short_description:string

    @Column()
    description:string

    @Column()
    @IsEmail()
    email:string

    @Column()
    locate:string

    @Column()
    position_status:boolean

    @Column()
    start_date : Date

    @Column()
    end_date : Date
    
    @Column()
    is_active : boolean

    @Column()
    is_approved : boolean

    @Column()
    @IsInt()
    user_id:number
}
