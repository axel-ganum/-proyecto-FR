import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity({name: 'ediciones_precios'})
export class ediciones_precios{
    @PrimaryGeneratedColumn()
    id_edipre: number

    @Column({ default: 'Valor Predeterminado' })
    id_producto: number

    @Column()
    nuevo_precio: number
    
    @Column()
    fecha_edicion: string


}