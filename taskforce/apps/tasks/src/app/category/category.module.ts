import {Module} from '@nestjs/common';
import {CategoryService} from './category.service';
import {CategoryRepository} from './category.repository';
import {CategoryController} from './category.controller';

@Module({
  imports: [],
  controllers: [CategoryController],
  providers: [CategoryService, CategoryRepository],
  exports: [CategoryRepository, CategoryModule]
})
export class CategoryModule {
}
