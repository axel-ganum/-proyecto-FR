import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn, ManyToOne } from 'typeorm';
import { Marcas } from 'src/marcas/marcas.entity';
import { Modelos } from 'src/modelos/modelos.entity';
import { Sucursales } from 'src/sucursales/sucursales.entity';

@Entity({ name: 'product' })
export class Productos {
    @PrimaryGeneratedColumn()
    id_product: number;

    @Column({ default: 'Valor Predeterminado' })
    producto: string;

    @ManyToOne(() => Marcas, marca => marca.producto, {nullable:true})
    marcas: Marcas;

    @ManyToOne(() => Modelos, modelo => modelo.producto, {nullable: true})
    modelos: Modelos;

    @ManyToOne(() => Sucursales, sucursal => sucursal.producto)
    sucursales: Sucursales;

    @Column()
    precio: number;

    @Column()
    stock: number;

    @Column()
    descripcion: string;

    @Column()
    categoria: string
}
