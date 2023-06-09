import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CustormersModule } from './custormers/customers.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), 
    CustormersModule, 
    ProductsModule,
  ],
})
export class AppModule {}
