import { ApiProperty } from '@nestjs/swagger';

import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateCustomerDTO {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @ApiProperty({ required: true })
  name: string;

  @IsEmail()
  @IsString()
  @IsNotEmpty()
  @MaxLength(300)
  @ApiProperty({ required: true })
  email: string;
}