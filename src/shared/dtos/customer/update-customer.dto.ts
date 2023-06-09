import { ApiProperty } from '@nestjs/swagger';
import { CreateCustomerDTO } from './create-customer.dto';

import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UpdateCustomerDTO extends CreateCustomerDTO{}