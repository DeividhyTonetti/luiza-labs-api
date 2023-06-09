import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service';
import { CustomersController } from './customers.controller';
import { PrismaModule } from 'src/modules/prisma/prisma.module';
import { HttpModule } from '@nestjs/axios';
import { PRODUCT_LUIZA_LABS_ENDPOINT } from '@/configuration/configuration';

PRODUCT_LUIZA_LABS_ENDPOINT

@Module({
  imports: [
    PrismaModule,
    HttpModule.register({
      baseURL: 'http://challenge-api.luizalabs.com/api/product/'
    })
  ],
  controllers: [CustomersController],
  providers: [CustomersService]
})

export class CustormersModule {}
