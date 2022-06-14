import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "src/commons/service.commons";
import { Repository } from "typeorm";
import { Producto } from "../entities/producto.entity";

@Injectable()
export class ProductoService extends BaseService<Producto> {

    constructor(@InjectRepository(Producto) private productoRepo : Repository<Producto>) {
        super();
    }

    getRepository(): Repository<Producto> {
        return this.productoRepo;
    }

}