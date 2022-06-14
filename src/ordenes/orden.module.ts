import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdenController } from './controllers/orden.controller';
import { Orden } from './entities/orden.entity';
import { OrdenService } from './services/orden.service';

@Module({
    imports : [TypeOrmModule.forFeature([Orden])],
    providers : [OrdenService],
    controllers : [OrdenController]
})
export class OrdenModule {

}