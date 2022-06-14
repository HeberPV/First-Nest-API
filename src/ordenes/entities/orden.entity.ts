import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Orden {

    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    id_usuario : number;

    @Column()
    direccion : string;

    @Column()
    total : number;
}