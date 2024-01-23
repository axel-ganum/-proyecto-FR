import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity({name: 'modelos'})
export class modelos {
    @PrimaryGeneratedColumn()
    id_modelos: number

    @Column({ default: 'Valor Predeterminado' })
    modelos: string




}