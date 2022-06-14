import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Orden_detalladaController } from './controllers/orden_detallada.controller';
import { Orden_detallada } from './entities/orden_detallada.entity';
import { Orden_detalladaService } from './services/orden_detallada.service';

@Module({
    imports : [TypeOrmModule.forFeature([Orden_detallada])],
    providers : [Orden_detalladaService],
    controllers : [Orden_detalladaController]
})
export class Orden_detalladaModule {

}