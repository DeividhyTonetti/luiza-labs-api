import { Module } from '@nestjs/common';
import { ProductsService } from '@services';
import { ProductsController } from '@controllers';
import { PrismaModule } from 'src/modules/prisma/prisma.module';

import { HttpModule } from '@nestjs/axios';

import { PRODUCT_LUIZA_LABS_ENDPOINT } from '@/configuration/configuration';

@Module({
  imports: [
    PrismaModule,
    HttpModule.register({
      baseURL: PRODUCT_LUIZA_LABS_ENDPOINT
    })
  ],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule {}
