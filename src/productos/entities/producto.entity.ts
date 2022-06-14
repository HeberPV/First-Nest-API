import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Producto {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    sku: string;

    @Column()
    precio: number;

    @Column()
    cantidad: number;
}