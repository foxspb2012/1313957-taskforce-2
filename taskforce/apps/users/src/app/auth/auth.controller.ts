import {Controller, Post, Body, Get, Param, HttpCode, HttpStatus, UseGuards} from '@nestjs/common';
import {ApiTags, ApiResponse} from '@nestjs/swagger';
import {fillObject} from '@taskforce/core';
import {AuthService} from './auth.service';
import {CreateUserDto} from './dto/create-user.dto';
import {LoginUserDto} from './dto/login-user.dto';
import {UserRdo} from './rdo/user.rdo';
import {LoggedUserRdo} from './rdo/logger-user.rdo';
import {MongoidValidationPipe} from '../pipes/mongoid-validation.pipe';
import {JwtAuthGuard} from './guards/jwt-auth.guard';

@ApiTags('auth')
@Controller('auth')
export class AuthController {

  constructor(
    private readonly authService: AuthService
  ) {
  }

  @Post('register')
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'The new user has been successfully created.'
  })
  public async create(@Body() dto: CreateUserDto) {
    const newUser = await this.authService.register(dto);
    return fillObject(UserRdo, newUser);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    type: LoggedUserRdo,
    status: HttpStatus.OK,
    description: 'User has been successfully logged.'
  })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: 'Password or Login is wrong.',
  })
  public async login(@Body() dto: LoginUserDto) {
    const user = await this.authService.verifyUser(dto);
    return this.authService.loginUser(user);
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  @ApiResponse({
    type: UserRdo,
    status: HttpStatus.OK,
    description: 'User found.'
  })
  public async show(@Param('id', MongoidValidationPipe) id: string) {
    const existUser = await this.authService.getUser(id);
    return fillObject(UserRdo, existUser);
  }
}
