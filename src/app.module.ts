import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductoModule } from './productos/producto.module';
import { UsuarioModule } from './usuarios/usuario.module';
import { OrdenModule } from './ordenes/orden.module';
import { Orden_detalladaModule } from './ordenes/orden_detallada.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type : 'mysql',
      host: 'localhost',
      port : 3306,
      username : 'root',
      password : '',
      database : 'rocket_api',
      autoLoadEntities : true
   }),
   ProductoModule,
   UsuarioModule,
   OrdenModule,
   Orden_detalladaModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
