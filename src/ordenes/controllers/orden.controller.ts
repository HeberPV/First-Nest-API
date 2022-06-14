import { Controller } from "@nestjs/common";
import { BaseController } from "src/commons/controller.commons";
import { BaseService } from "src/commons/service.commons";
import { Orden } from "../entities/orden.entity";
import { OrdenService } from "../services/orden.service";

@Controller('api/orden')
export class OrdenController extends BaseController<Orden> {

    constructor(private readonly OrdenService: OrdenService) {
        super();
    }

    getService(): BaseService<Orden> {
        return this.OrdenService;
    }

}