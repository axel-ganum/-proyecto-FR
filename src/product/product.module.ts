import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { TypeOrmModule } from '@nestjs/typeorm'; 
import { Productos} from './product.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Productos])],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
