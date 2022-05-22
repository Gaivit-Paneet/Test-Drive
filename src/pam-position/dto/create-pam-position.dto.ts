import { validate,Matches,IsNotEmpty, IsInt, Min, IsEmail } from "class-validator"

export class CreatPamPositionDto {
    @Matches(/^[ก-๛A-Za-z0-9 ]+$/) 
    @IsNotEmpty()
    position_name:string

    @IsNotEmpty()
    short_description:string

    @IsNotEmpty()
    description:string

    @IsNotEmpty()
    @IsEmail()
    email:string
    
    @IsNotEmpty()
    locate:string

    @IsNotEmpty()
    position_status:string

    @IsNotEmpty()
    start_date:string

    @IsNotEmpty()
    end_date:string

    @IsNotEmpty()
    is_active:boolean

    @IsNotEmpty()
    is_approved:boolean

    @IsNotEmpty()
    @IsInt()
    @Min(1)
    user_id:number
}