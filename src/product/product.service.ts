import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Productos } from './product.entity';
import { Repository, Like, FindManyOptions } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductService {

    constructor(@InjectRepository(Productos) private productRepository: Repository<Productos>) {}
    
    createProduct(product:CreateProductDto) {
        const newProduct = this.productRepository.create(product)
        return this.productRepository.save(newProduct)
    }

    getProducts(query:string) {
    
         const searchOptions: FindManyOptions<Productos> = {
            where: [
                { productname: Like(`${query}`)}
            ],
         };
         
           return this.productRepository.find(searchOptions);
         }

}
