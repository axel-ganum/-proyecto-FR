import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Productos } from './product.entity';
import { Repository, ILike, FindManyOptions,} from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductService {

    constructor(@InjectRepository(Productos) private productRepository: Repository<Productos>) {}
    
    createProduct(product:CreateProductDto) {
        const newProduct = this.productRepository.create(product)
        return this.productRepository.save(newProduct)
    }

   async getProducts(query:string) {
       try {
          const serachOptions: FindManyOptions<Productos> = {
            where: [
                 { producto: ILike(`%${query}%`) }
            ],
          };

             return await this.productRepository.find(serachOptions);

        } catch (error) {
            console.log('Error al obtener:', error);
            throw error
        }
        
       }
        
}
