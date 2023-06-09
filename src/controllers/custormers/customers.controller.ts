import { CustomersService } from '@services';
import { ValidationPipe } from '@nestjs/common';
import { PartialUpdateDTO, UpdateCustomerDTO, CreateCustomerDTO } from '@dtos';
import { Controller, Get, Post, Body, Patch, Put, Param, Delete, UsePipes, HttpCode, HttpStatus } from '@nestjs/common';

import { ApiParam, ApiBody, ApiTags } from '@nestjs/swagger';

@Controller('customers')
@ApiTags('Customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Post()
  @ApiBody({ type: CreateCustomerDTO })
  @UsePipes(new ValidationPipe())
  @HttpCode(HttpStatus.OK)
  create(@Body() createCustomerDto: CreateCustomerDTO) {
    return this.customersService.create(createCustomerDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.customersService.findAll();
  }

  @Get(':id')
  @ApiParam({ name: 'id', type: String })
  @HttpCode(HttpStatus.OK)
  @UsePipes(new ValidationPipe())
  findOne(@Param('id') id: string) {
    return this.customersService.findOne(id);
  }

  @Patch(':id')
  @ApiParam({ name: 'id', type: String })
  @ApiBody({ type: PartialUpdateDTO })
  @HttpCode(HttpStatus.OK)
  @UsePipes(new ValidationPipe())
  partialUpdate(@Param('id') id: string, @Body() updateCustomerDto: PartialUpdateDTO) {
    return this.customersService.patch(id, updateCustomerDto);
  }
  
  @Put(':id')
  @ApiParam({ name: 'id', type: String })
  @ApiBody({ type: UpdateCustomerDTO })
  @HttpCode(HttpStatus.OK)
  @UsePipes(new ValidationPipe())
  update(@Param('id') id: string, @Body() updateCustomerDto: UpdateCustomerDTO) {
    return this.customersService.update(id, updateCustomerDto);
  }

  @Delete(':id')
  @ApiParam({ name: 'id', type: String })
  @HttpCode(HttpStatus.OK)
  @UsePipes(new ValidationPipe())
  remove(@Param('id') id: string) {
    return this.customersService.remove(id);
  }
}
