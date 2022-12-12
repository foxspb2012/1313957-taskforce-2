import {Module} from '@nestjs/common';
import {AuthController} from './auth.controller';
import {AuthService} from './auth.service';
import {SiteUserModule} from '../site-user/site-user.module';

@Module({
  imports: [SiteUserModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {
}
