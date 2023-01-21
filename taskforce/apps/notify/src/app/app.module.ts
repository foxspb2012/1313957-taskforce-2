import {Module} from '@nestjs/common';
import {EmailModule} from './email/email.module';
import {MailerModule} from '@nestjs-modules/mailer';
import {ConfigModule} from '@nestjs/config';
import {ENV_FILE_PATH} from './email/email.constant';
import emailConfig, {getSmtpConfig} from './email/config/email.config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: ENV_FILE_PATH,
      load: [emailConfig],
    }),
    MailerModule.forRootAsync(getSmtpConfig()),
    EmailModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
}
