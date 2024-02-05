import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Productos} from './product.entity';
import { marcas } from 'src/marcas/marcas.entity';
import { modelos } from 'src/modelos/modelos.entity';
import { sucursales } from 'src/sucursales/sucursales.entity';
@Module({
  imports: [TypeOrmModule.forFeature([Productos, marcas, modelos,sucursales])],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
