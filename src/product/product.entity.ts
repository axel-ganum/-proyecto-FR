import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity({name: 'product'})
export class Productos {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ default: 'Valor Predeterminado' })
    productname: string

    @Column()
    productprice: number


}