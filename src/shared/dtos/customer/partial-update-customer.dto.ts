import { ApiProperty } from '@nestjs/swagger';
import { CreateCustomerDTO } from './create-customer.dto';

import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { PartialType } from '@nestjs/mapped-types';

export class PartialUpdateCustomerDTO extends PartialType(CreateCustomerDTO) {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @ApiProperty({ required: false })
  name?: string;

  @IsEmail()
  @IsString()
  @IsNotEmpty()
  @MaxLength(300)
  @ApiProperty({ required: false })
  email?: string;
}