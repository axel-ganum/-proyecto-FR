import { Controller, Post,Get, Body, Query, BadRequestException} from '@nestjs/common';
import { CreateProductWithDetailsDto } from './dto/create-product.dto';
import { ProductService } from './product.service';
import {Productos} from './product.entity'


@Controller('product')
export class ProductController {
 
    constructor(private productServise: ProductService) {}
    @Get()
   async getProducts(@Query('query') query: string) {
    try {
        const products = await this.productServise.getProducts(query);
        return products;
    } catch (error) {
        console.error('Error al obtener productos:', error);
        throw new BadRequestException('Error al obtener productos. Detalles: ' + error.message);
    }
   }

    @Post()
    createProduct(@Body() newProduct: CreateProductWithDetailsDto): Promise<Productos>{
        return this.productServise.createProductWithDetails(newProduct)
    }

}
