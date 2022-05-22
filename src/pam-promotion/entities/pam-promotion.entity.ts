import { Entity,Column,PrimaryGeneratedColumn } from "typeorm"; 
@Entity('pampromotion')
export class PamPromotion{
     @PrimaryGeneratedColumn()
     promotion_id:number

     @Column()
     short_description:string
     
     @Column()
     description:string
     
     @Column()
     promotype:string

     @Column()
     promo_status:boolean

     @Column()
     is_active : boolean

     @Column()
     start_date : string

     @Column()
     end_date : string

     @Column()
     user_id:number

     @Column()
     images : string
}