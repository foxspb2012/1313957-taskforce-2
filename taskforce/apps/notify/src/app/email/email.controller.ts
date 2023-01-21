import {Controller, Get} from '@nestjs/common';
import {EmailService} from './email.service';

@Controller('send-email')
export class EmailController {
  constructor(private readonly emailService: EmailService) {
  }

  @Get('/')
  public index() {
    this.emailService.sendMail();
  }
}
