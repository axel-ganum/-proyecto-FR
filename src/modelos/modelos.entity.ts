import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Productos } from '../product/product.entity';

@Entity({ name: 'modelos' })
export class Modelos {
    @PrimaryGeneratedColumn()
    id_modelo: number;

    @Column()
    modelo: string;

    @ManyToOne(() => Productos, producto => producto.modelos)
    producto: Productos[];
}
