import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import * as cors from 'cors';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';



@Module({
  imports: [
    TypeOrmModule.forRoot ({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'RF',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
    }),
  
    ProductModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {configure(consumer: MiddlewareConsumer) {
  consumer.apply(cors()).forRoutes({ path: '*', method: RequestMethod.ALL })// Habilita CORS para todas las rutas
}}
