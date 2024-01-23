import { marcas } from 'src/marcas/marcas.entity'
import { modelos } from 'src/modelos/modelos.entity'
import { sucursales } from 'src/sucursales/sucursales.entity'
import {Entity, Column, PrimaryGeneratedColumn,OneToOne, JoinColumn} from 'typeorm'

@Entity({name: 'product'})
export class Productos {
    @PrimaryGeneratedColumn()
    id_product: number

    @Column({ default: 'Valor Predeterminado' })
    producto: string

    @Column()
    id_marcas: number
    
    @OneToOne(() =>marcas)
    @JoinColumn({ name:'marcas'})
    marcas: marcas;
    
    @Column()
    id_modelos: number

    @OneToOne(() =>modelos)
    @JoinColumn({ name:'modelos'})
    modelos: modelos;

    @Column()
    id_sucursales: number

    @OneToOne(() =>sucursales)
    @JoinColumn({ name:'sucursales'})
    sucursales: sucursales;
    
    @Column()
    codigo_de_barras: number

    @Column()
    precio: number

    @Column()
    stock: number

    @Column()
    url_imagen: string

    @Column()
    descripcion: string
}