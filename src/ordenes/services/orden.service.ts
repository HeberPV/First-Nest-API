import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BaseService } from "src/commons/service.commons";
import { Repository } from "typeorm";
import { Orden } from "../entities/orden.entity";

@Injectable()
export class OrdenService extends BaseService<Orden> {

    constructor(@InjectRepository(Orden) private OrdensRepo : Repository<Orden>) {
        super();
    }

    getRepository(): Repository<Orden> {
        return this.OrdensRepo;
    }

}