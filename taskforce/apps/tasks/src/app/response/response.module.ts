import {Module} from '@nestjs/common';
import {ResponseService} from './response.service';
import {ResponseRepository} from './response.repository';
import {ResponseController} from './response.controller';

@Module({
  controllers: [ResponseController],
  providers: [ResponseService, ResponseRepository],
})
export class ResponseModule {
}

