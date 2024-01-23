import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity({name: 'marcas'})
export class marcas {
    @PrimaryGeneratedColumn()
    id_marca: number

    @Column({ default: 'Valor Predeterminado' })
    marca: string



}