import { Controller } from "@nestjs/common";
import { BaseController } from "src/commons/controller.commons";
import { BaseService } from "src/commons/service.commons";
import { Orden_detallada } from "../entities/orden_detallada.entity";
import { Orden_detalladaService } from "../services/orden_detallada.service";

@Controller('api/orden_detallada')
export class Orden_detalladaController extends BaseController<Orden_detallada> {

    constructor(private readonly Orden_detalladaService: Orden_detalladaService) {
        super();
    }

    getService(): BaseService<Orden_detallada> {
        return this.Orden_detalladaService;
    }

}