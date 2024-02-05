import { Module, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import * as cors from 'cors';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { EdicionesPreciosModule } from './ediciones_precios/ediciones_precios.module';
import { MarcasService } from './marcas/marcas.service';
import { MarcasModule } from './marcas/marcas.module';
import { SucursalesController } from './sucursales/sucursales.controller';
import { SucursalesModule } from './sucursales/sucursales.module';



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
      migrations: ["dist/migrations/*.js"]
     
    }),
  
    ProductModule,
  
    EdicionesPreciosModule,
  
    MarcasModule,
  
    SucursalesModule
  ],
  controllers: [AppController, SucursalesController],
  providers: [AppService, MarcasService],
})
export class AppModule {configure(consumer: MiddlewareConsumer) {
  consumer.apply(cors()).forRoutes({ path: '*', method: RequestMethod.ALL })// Habilita CORS para todas las rutas
}}
