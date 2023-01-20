import {Injectable, UnauthorizedException} from '@nestjs/common';
import {SiteUserRepository} from '../site-user/site-user.repository';
import {AUTH_USER_NOT_FOUND, AUTH_USER_EXISTS, AUTH_USER_BY_ID, AUTH_USER_PASSWORD_WRONG} from './auth.constant';
import {SiteUserEntity} from '../site-user/site-user.entity';
import {User, UserRole} from '@taskforce/shared-types';
import {CreateUserDto} from './dto/create-user.dto.js';
import {LoginUserDto} from './dto/login-user.dto';
import {JwtService} from '@nestjs/jwt';
import * as dayjs from 'dayjs';

@Injectable()
export class AuthService {
  constructor(
    private readonly siteUserRepository: SiteUserRepository,
    private readonly jwtService: JwtService,
  ) {
  }

  async register(dto: CreateUserDto) {
    const {name, email, dateBirth, city, password} = dto;
    const siteUser: User = {
      name, email, role: UserRole.Customer, dateBirth: dayjs(dateBirth).toDate(), city, avatar: '', passwordHash: '', rating: 0
    };

    const existUser = await this.siteUserRepository
      .findByEmail(email);

    if (existUser) {
      throw new Error(AUTH_USER_EXISTS);
    }

    const userEntity = await new SiteUserEntity(siteUser).setPassword(password)

    return this.siteUserRepository
      .create(userEntity);
  }

  async verifyUser(dto: LoginUserDto) {
    const {email, password} = dto;
    const existUser = await this.siteUserRepository.findByEmail(email);

    if (!existUser) {
      throw new UnauthorizedException(AUTH_USER_NOT_FOUND);
    }

    const siteUserEntity = new SiteUserEntity(existUser);
    if (!await siteUserEntity.comparePassword(password)) {
      throw new UnauthorizedException(AUTH_USER_PASSWORD_WRONG);
    }

    return siteUserEntity.toObject();
  }

  async getUser(id: string) {
    const user = await this.siteUserRepository.findById(id);

    if (!user) {
      throw new Error(AUTH_USER_BY_ID);
    }

    return user;
  }

  async loginUser(user: User) {
    const payload = {
      sub: user._id,
      email: user.email,
      role: user.role,
      name: user.name,
    };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
