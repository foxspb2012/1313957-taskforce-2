import {Module} from '@nestjs/common';
import {SiteUserModule} from './site-user/site-user.module';
import {AuthModule} from './auth/auth.module';

@Module({
  imports: [SiteUserModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {
}
