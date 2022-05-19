import { Column, Entity } from "typeorm";

@Entity()
export class PamAnnoucement {
    @Column()
    subject : string

    @Column()
    short_description:string

    @Column()
    description:string

    @Column()
    annoucetype:string

    @Column()
    annouce_status:boolean

    @Column()
    is_active:boolean

    @Column()
    start_date:string

    @Column()
    end_date:string

    @Column()
    user_id : number

    @Column()
    images : number
}
