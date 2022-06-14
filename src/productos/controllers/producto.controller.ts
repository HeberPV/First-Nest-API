import { Controller } from "@nestjs/common";
import { BaseController } from "src/commons/controller.commons";
import { BaseService } from "src/commons/service.commons";
import { Producto } from "../entities/producto.entity";
import { ProductoService } from "../services/productos.service";
import { Body, Get, HttpCode, HttpStatus, Param, Post, UseGuards } from "@nestjs/common";

@Controller('api/producto')
export class ProductoController extends BaseController<Producto> {

    constructor(private readonly productoService: ProductoService) {
        super();
    }

    getService(): BaseService<Producto> {
        return this.productoService;
    }

}