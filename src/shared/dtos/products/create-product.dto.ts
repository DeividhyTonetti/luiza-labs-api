import { ApiProperty } from '@nestjs/swagger';

import {
  IsNotEmpty,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateProductDto {
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
}