import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Producto{
    @PrimaryGeneratedColumn()
    id!: number;
    @Column({type:'varchar', length:100})
    nombre!: string;
    @Column({ type:'int' })
    unidades!: number;
    @Column({ type:'decimal' })
    precio!: number;
    @Column({ type:'varchar', length:255})
    imagenUrl!: string;
    @Column({ default: true })
    estado!: boolean;
    
}