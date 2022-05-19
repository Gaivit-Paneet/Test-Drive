import {
    validate,
    validateOrReject,
    Contains,
    IsNotEmpty,
    IsInt,
    Length,
    IsEmpty,
    IsEmail,
    IsFQDN,
    Matches,
    IsDate,
    Min,
    Max,
    matches,
  } from 'class-validator';

export class PamContactDto {
    @Matches('[ก-๛A-Za-z0-9 ]+$')
    title : string

    @Matches('[ก-๛A-Za-z0-9 ]+$')
    firstname:string

    @IsEmail()
    email:string

    @IsNotEmpty()
    tel:string

    @IsNotEmpty()
    description:string
}
