import { validate,Matches,IsNotEmpty, IsInt, Min, IsString } from "class-validator"
import { Column } from "typeorm"
export class CreatePamAnnouncementDto{
    @Matches(/^[ก-๛A-Za-z0-9 ]+$/) 
    @IsNotEmpty()
    subject:string

    @IsNotEmpty()
    short_description:string

    @IsNotEmpty()
    description:string

    @IsNotEmpty()
    announcetype:string

    @IsNotEmpty()
    announce_status:boolean

    @IsNotEmpty()
    is_active:boolean

    @IsNotEmpty()
    start_date:string

    @IsNotEmpty()
    end_date:string

    @IsNotEmpty()
    @IsInt()
    @Min(1)
    user_id:number

    @IsNotEmpty()
    @IsString()
    images : string
}