import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Productos } from './product.entity';
import { Repository, ILike, EntityManager} from 'typeorm';
import { CreateProductWithDetailsDto } from './dto/create-product.dto';
import { Marcas } from 'src/marcas/marcas.entity';
import { Modelos } from 'src/modelos/modelos.entity';
import { Sucursales } from 'src/sucursales/sucursales.entity';
@Injectable()
export class ProductService {

    constructor(
        @InjectRepository(Productos) private readonly productRepository: Repository<Productos>,
        @InjectRepository(Marcas) private readonly marcaRepository: Repository<Marcas>,
        @InjectRepository(Modelos) private readonly modelosRepository: Repository<Modelos>,
        @InjectRepository(Sucursales) private readonly sucursalesRepository: Repository<Sucursales>,
     ) {}
    
     async createProductWithDetails(createProductDto: CreateProductWithDetailsDto): Promise<Productos> {
      try{ return this.productRepository.manager.transaction(async (transactionalEntityManager: EntityManager) => {
            // Crear nuevas marcas, modelos y sucursales
            const nuevaMarca = await transactionalEntityManager.save(Marcas, { marca: createProductDto.marca });
            const nuevoModelo = await transactionalEntityManager.save(Modelos, { modelo: createProductDto.modelo });
            const nuevaSucursal = await transactionalEntityManager.save(Sucursales, { nombre: createProductDto.sucursal});

            // Crear el nuevo producto y asignar las nuevas marcas, modelos y sucursales
            const nuevoProducto = this.productRepository.create({
              ...createProductDto,
              marcas: nuevaMarca,
              modelos: nuevoModelo,
              sucursales: nuevaSucursal,
              categoria: createProductDto.categoria,
            });
            
            // Guardar el nuevo producto
            return transactionalEntityManager.save(Productos, nuevoProducto);
          });
        } catch (error) {
          console.log('Error al crear el producto con detalles:', error);
          throw new BadRequestException('Error al crear el producto con detalles');
        }
      }  
      
      async getAllProducts(): Promise<Productos[]> {
        return await this.productRepository.find();
      }


   async getProducts(query:string) {
       try {
          const serachOptions = query
            ? {producto: ILike(`%${query}%`)} 
            : {};

            const productos = await this.productRepository.find({
                where: serachOptions,
                relations: ['marcas', 'modelos','sucursales']
            });
              
             
            const ProductosJSON = productos.map(producto => ({
                producto: producto.producto,
                precio: producto.precio,
                stock: producto.stock,
                 descripcion: producto.descripcion,
                 marca: producto.marcas ? producto.marcas.marca : null,
                 sucursal: producto.sucursales ? producto.sucursales.nombre : null,
                 modelo: producto.modelos ? producto.modelos.modelo : null,
                 categoria: producto.categoria,
            }));
             
           return ProductosJSON;
          

        } catch (error) {
            console.log('Error al obtener:', error);
            throw new BadRequestException('Error al obtener producto')
        } 
      }
        

       }
       

