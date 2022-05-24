import { IsEmail, IsNotEmpty, IsPhoneNumber, Length, Matches } from 'class-validator';
import { Column } from 'typeorm';

export class CreatePamContactDto {
    @Matches(/^[ก-๛A-Za-z0-9 ]+$/) 
    @IsNotEmpty()
    title:string

    @Matches(/^[ก-๛A-Za-z0-9 ]+$/) 
    @IsNotEmpty()
    firstname:string

    @IsEmail()
    @IsNotEmpty()
    email:string

    @Length(0,10)
    @IsNotEmpty()
    tel:string

    @IsNotEmpty()
    description:string

    
    created_date:Date

    
    contact_time:Date

}
