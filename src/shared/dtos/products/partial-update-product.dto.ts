import { ApiProperty } from '@nestjs/swagger';
import { CreateProductDto } from './create-product.dto';

import {
  IsNotEmpty,
  IsString,
  IsUUID,
} from 'class-validator';

import { PartialType } from '@nestjs/mapped-types';

export class PartialUpdateProductDTO extends PartialType(CreateProductDto) {
  @IsString()
  @IsNotEmpty()
  @IsUUID()
  @ApiProperty({ required: true })
  customerId: string;

  @IsString()
  @IsNotEmpty()
  @IsUUID()
  @ApiProperty({ required: true })
  productId: string;
  
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  title?: string;
  
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  price?: string;
  
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  image?: string;
  
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: true })
  reviewLink?: string;
}