import { Module } from '@nestjs/common';
import { ProductsService } from '@services';
import { ProductsController } from '@controllers';
import { PrismaModule } from 'src/modules/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule {}
