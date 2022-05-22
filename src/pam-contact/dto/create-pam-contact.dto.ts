import { IsEmail, IsNotEmpty, IsPhoneNumber, Length, Matches } from 'class-validator';

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
    @IsPhoneNumber()
    tel:string

    @IsNotEmpty()
    description:string

}
