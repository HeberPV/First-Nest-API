import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductoController } from './controllers/producto.controller';
import { Producto } from './entities/producto.entity';
import { ProductoService } from './services/productos.service';

@Module({
    imports : [TypeOrmModule.forFeature([Producto])],
    exports : [TypeOrmModule] ,
    providers : [ProductoService],
    controllers : [ProductoController]
})
export class ProductoModule {

}