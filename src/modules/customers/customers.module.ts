import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { CustomersService } from '@services';
import { CustomersController } from '@controllers';
import { PrismaModule } from 'src/modules/prisma/prisma.module';
import { PRODUCT_LUIZA_LABS_ENDPOINT } from '@/configuration/configuration';

@Module({
  imports: [
    PrismaModule,
    HttpModule.register({
      baseURL: PRODUCT_LUIZA_LABS_ENDPOINT
    })
  ],
  controllers: [CustomersController],
  providers: [CustomersService]
})

export class CustormersModule {}
