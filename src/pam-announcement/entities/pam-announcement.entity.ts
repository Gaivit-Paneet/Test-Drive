import { Entity,PrimaryGeneratedColumn,Column } from "typeorm"
@Entity('pamannoucement')
export class PamAnnouncement{
    @PrimaryGeneratedColumn()
    announce_id:number

    @Column()
    short_description:string
    
    @Column()
    description:string
    
    @Column()
    announcetype:string

    @Column()
    announce_status:boolean

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