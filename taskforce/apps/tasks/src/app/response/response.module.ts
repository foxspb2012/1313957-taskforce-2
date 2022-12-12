import {Module} from '@nestjs/common';
import {ResponseController} from './response.controller';
import {ResponseService} from './response.service';
import {ResponseMemoryRepository} from './response-memory.repository';

@Module({
  providers: [ResponseMemoryRepository, ResponseService],
  controllers: [ResponseController],
  exports: [ResponseMemoryRepository],
})
export class ResponseModule {
}

