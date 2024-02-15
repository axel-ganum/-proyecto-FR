import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Productos} from './product.entity';
import { Marcas } from 'src/marcas/marcas.entity';
import { Modelos } from 'src/modelos/modelos.entity';
import { Sucursales } from 'src/sucursales/sucursales.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Productos, Marcas, Modelos,Sucursales])],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
