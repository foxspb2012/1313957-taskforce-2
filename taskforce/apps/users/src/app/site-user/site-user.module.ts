import { Module } from '@nestjs/common';
import {SiteUserMemoryRepository} from './site-user-memory.repository';

@Module({
  imports: [],
  providers: [SiteUserMemoryRepository],
  exports: [SiteUserMemoryRepository],
})
export class SiteUserModule {}
