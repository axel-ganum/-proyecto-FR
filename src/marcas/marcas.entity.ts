import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Productos } from '../product/product.entity';

@Entity({ name: 'marcas' })
export class Marcas {
    @PrimaryGeneratedColumn()
    id_marca: number;

    @Column()
    marca: string;

    @ManyToOne(() => Productos, producto => producto.marcas)
    producto: Productos[];
}
