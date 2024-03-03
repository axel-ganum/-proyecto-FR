import { Entity, Column, PrimaryGeneratedColumn, ManyToOne,OneToMany } from 'typeorm';
import { Productos } from '../product/product.entity';

@Entity({ name: 'sucursales' })
export class Sucursales {
    @PrimaryGeneratedColumn()
    id_sucursal: number;

    @Column()
    ciudad: string;

    @ManyToOne(() => Productos, producto => producto.sucursales)
    producto: Productos[];
  nombre: any;
}
