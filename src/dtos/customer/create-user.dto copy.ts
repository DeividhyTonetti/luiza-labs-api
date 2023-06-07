import { ApiProperty } from '@nestjs/swagger';

import {
  IsNotEmpty,
  IsString,
  IsUUID,
} from 'class-validator';

export class CreateArticleDto {
  @IsString()
  @IsNotEmpty()
  @IsUUID()
  @ApiProperty({ required: true })
  custumerId: string;

  @IsString()
  @IsNotEmpty()
  @IsUUID()
  @ApiProperty({ required: true })
  productId: string;
}