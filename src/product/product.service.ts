import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Productos } from './product.entity';
import { Repository, ILike, EntityManager} from 'typeorm';
import { CreateProductWithDetailsDto } from './dto/create-product.dto';
import { marcas } from 'src/marcas/marcas.entity';
import { modelos } from 'src/modelos/modelos.entity';
import { sucursales } from 'src/sucursales/sucursales.entity';
@Injectable()
export class ProductService {

    constructor(
        @InjectRepository(Productos) private readonly productRepository: Repository<Productos>,
        @InjectRepository(marcas) private readonly marcaRepository: Repository<marcas>,
        @InjectRepository(modelos) private readonly modelosRepository: Repository<modelos>,
        @InjectRepository(sucursales) private readonly sucursalesRepository: Repository<sucursales>,
     ) {}
    
     async createProductWithDetails(createProductDto: CreateProductWithDetailsDto) {
      try{ return this.productRepository.manager.transaction(async (transactionalEntityManager: EntityManager) => {
            // Crear nuevas marcas, modelos y sucursales
            const nuevaMarca = await transactionalEntityManager.save(marcas, { marca: createProductDto.marca });
            const nuevoModelo = await transactionalEntityManager.save(modelos, { modelos: createProductDto.modelo });
            const nuevaSucursal = await transactionalEntityManager.save(sucursales, { nombre: createProductDto.sucursal, ciudad:createProductDto.ciudad});

            // Crear el nuevo producto y asignar las nuevas marcas, modelos y sucursales
            const nuevoProducto = this.productRepository.create({
                ...createProductDto,
                id_marca: nuevaMarca.id_marca, 
                modelos: nuevoModelo,
                sucursales: nuevaSucursal,
                
                });

            // Guardar el nuevo producto
            return transactionalEntityManager.save(Productos, nuevoProducto);
        });
    } catch (error) {
        console.log('Error al crear el producto con detalles:', error);
      throw new BadRequestException('Error al crear el producto con detalles');
    }
}  



   async getProducts(query:string) {
       try {
          const serachOptions = query
            ? {producto: ILike(`%${query}`)} 
            : {};

            const productos = await this.productRepository.find({
                where: serachOptions,
                relations: ['marcas', 'modelos','sucursales']
            });
              
             
            const ProductosJSON = productos.map(producto => ({
                producto: producto.producto,
                codigo_de_barras: producto.codigo_de_barras,
                precio: producto.precio,
                stock: producto.stock,
                 url_imagenes: producto.url_imagen,
                 descripcion: producto.descripcion,
                 marca: producto.marcas ? producto.marcas.marca : null,
                 modelo: producto.modelos ? producto.modelos.modelos : null,
                 sucursal: producto.sucursales ? producto.sucursales.nombre : null,
                 ciudad: producto.sucursales ? producto.sucursales.ciudad : null,
            }));
             
           return ProductosJSON;
          

        } catch (error) {
            console.log('Error al obtener:', error);
            throw new BadRequestException('Error al obtener producto')
        }
        
       }
       async searchProducts(query: string) {
        try {
          const searchOptions = query
            ? { producto: ILike(`%${query}`) }
            : {};
    
          return this.productRepository.find({
            where: searchOptions,
            relations: ['marcas', 'modelos', 'sucursales'],
          });
        } catch (error) {
          console.log('Error al buscar productos:', error);
          throw error;
        }
      }
}
