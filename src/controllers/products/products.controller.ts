import { ProductsService } from '@services';
import { ValidationPipe } from '@nestjs/common';
import { CreateProductDto } from '@dtos';
import { Controller, Get, Post, Body, Patch, Put, Param, Delete, UsePipes, HttpCode, HttpStatus } from '@nestjs/common';

import { ApiParam, ApiBody, ApiTags } from '@nestjs/swagger';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @ApiBody({ type: CreateProductDto })
  @UsePipes(new ValidationPipe())
  @HttpCode(HttpStatus.OK)
  create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.productsService.findAll();
  }

  @Get(':id')
  @ApiParam({ name: 'id', type: String })
  @HttpCode(HttpStatus.OK)
  @UsePipes(new ValidationPipe())
  findOne(@Param('id') id: string) {
    return this.productsService.findOne(+id);
  }

  @Patch(':id')
  @ApiParam({ name: 'id', type: String })
  @ApiBody({ type: PartialUpdateDTO })
  @HttpCode(HttpStatus.OK)
  @UsePipes(new ValidationPipe())
  partialUpdate(@Param('id') id: string, @Body() updateCustomerDto: PartialUpdateDTO) {
    // return this.customersService.patch(id, updateCustomerDto);
  }

  @Put(':id')
  @ApiParam({ name: 'id', type: String })
  @ApiBody({ type: UpdateCustomerDTO })
  @HttpCode(HttpStatus.OK)
  @UsePipes(new ValidationPipe())
  update(@Param('id') id: string, @Body() updateProductDto: any) {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', type: String })
  @HttpCode(HttpStatus.OK)
  @UsePipes(new ValidationPipe())
  remove(@Param('id') id: string) {
    return this.productsService.remove(+id);
  }
}
