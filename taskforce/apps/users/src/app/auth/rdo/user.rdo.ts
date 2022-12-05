import {Expose} from 'class-transformer';
import {ApiProperty} from '@nestjs/swagger';

export class UserRdo {
  @ApiProperty({
    description: 'The uniq user ID',
    example: '0667dea8-fbb7-41d0-8ff3-5b44539dbfad'
  })
  @Expose({name: '_id'})
  public id: string;

  @ApiProperty({
    description: 'User name',
    example: 'Fox'
  })
  @Expose()
  public name: string;

  @ApiProperty({
    description: 'User unique address',
    example: 'user@user.ru'
  })
  @Expose()
  public email: string;

  @ApiProperty({
    description: 'User avatar path',
    example: '/images/user2.png'
  })
  @Expose()
  public avatar: string;

  @ApiProperty({
    description: 'User date birth (ISO format)',
    example: '1982-02-20'
  })
  @Expose()
  public dateBirth: string;

  @ApiProperty({
    description: 'User city',
    example: 'Saint-Petersburg'
  })
  @Expose()
  public city: string;

  @ApiProperty({
    description: 'User role',
    example: 'customer'
  })
  @Expose()
  public role: string;
}
