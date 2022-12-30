import {Controller, HttpStatus, Get} from '@nestjs/common';
import {ApiResponse, ApiTags} from '@nestjs/swagger';
import {CategoryService} from './category.service';
import {CreateCategoryDto} from './dto/create-category.dto';

@ApiTags('categories')
@Controller('categories')
export class CategoryController {
  constructor(
    private readonly categoryService: CategoryService,
  ) {
  }

  @ApiResponse({
    type: CreateCategoryDto,
    status: HttpStatus.CREATED,
  })
  @Get()
  async getCategories() {
    return await this.categoryService.getCategories();
  }
}
