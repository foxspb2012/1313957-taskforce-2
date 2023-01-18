import {ApiProperty} from '@nestjs/swagger';
import {IsEmail, IsISO8601, IsString} from 'class-validator';
import {AUTH_USER_DATE_BIRTH_NOT_VALID, AUTH_USER_EMAIL_NOT_VALID} from '../auth.constant';
import {UserRole, UserCity} from '@taskforce/shared-types';

export class CreateUserDto {

  @ApiProperty({
    description: 'User name',
    example: 'Fox',
  })
  @IsString()
  public name: string;

  @ApiProperty({
    description: 'User unique address',
    example: 'user@user.ru',
  })
  @IsEmail(
    {},
    {message: AUTH_USER_EMAIL_NOT_VALID},
  )
  public email: string;

  @ApiProperty({
    description: 'User birth date',
    example: '1982-02-20',
  })
  @IsISO8601({
    message: AUTH_USER_DATE_BIRTH_NOT_VALID,
  })
  public dateBirth: string;

  @ApiProperty({
    description: 'User city',
    example: 'Санкт-Петербург',
    enum: UserCity,
    required: true,
  })
  @IsString()
  public city: UserCity;

  @ApiProperty({
    description: 'User role',
    example: 'customer'
  })
  @IsString()
  public role: UserRole;

  @ApiProperty({
    description: 'User password',
    example: '123456'
  })
  @IsString()
  public password: string;
}
