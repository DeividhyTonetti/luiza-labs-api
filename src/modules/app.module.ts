import { ConfigModule } from '@nestjs/config';
import { APP_GUARD } from '@nestjs/core'
import { Module } from '@nestjs/common';

import { 
  CustormersModule,
  ProductsModule
} from '@modules'

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), 
    CustormersModule, 
    ProductsModule,
  ],
})

export class AppModule {}
