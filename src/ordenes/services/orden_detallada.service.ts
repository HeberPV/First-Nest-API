import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "src/commons/service.commons";
import { Repository } from "typeorm";
import { Orden_detallada } from "../entities/orden_detallada.entity";

@Injectable()
export class Orden_detalladaService extends BaseService<Orden_detallada> {

    constructor(@InjectRepository(Orden_detallada) private orden_detalladasRepo : Repository<Orden_detallada>) {
        super();
    }

    getRepository(): Repository<Orden_detallada> {
        return this.orden_detalladasRepo;
    }

}