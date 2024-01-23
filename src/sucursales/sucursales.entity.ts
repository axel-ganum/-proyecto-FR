import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity({name: 'sucursales'})
export class sucursales {
    @PrimaryGeneratedColumn()
    id_sucursales: number

    @Column({ default: 'Valor Predeterminado' })
    nombre: string

    @Column()
    ciudad: string


}