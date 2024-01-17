import { Controller, Post,Get, Body, Query} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductService } from './product.service';
import {Productos} from './product.entity'


@Controller('product')
export class ProductController {
 
    constructor(private productServise: ProductService) {}
    @Get()
   async getProducts(@Query('query') query: string) {
        return await this.productServise.getProducts(query);
    }


    @Post()
    createProduct(@Body() newProduct: CreateProductDto): Promise<Productos>{
        return this.productServise.createProduct(newProduct)
    }

}
