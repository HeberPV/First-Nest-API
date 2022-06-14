import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Orden_detallada {

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    id_orden : number;

    @Column()
    id_producto : number;

    @Column()
    precio : number;

    @Column()
    sku : string;

    @Column()
    cantidad : number;
}