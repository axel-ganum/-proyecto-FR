import { Module } from '@nestjs/common';
import { EdicionesPreciosController } from './ediciones_precios.controller';
import { EdicionesPreciosService } from './ediciones_precios.service';

@Module({
  controllers: [EdicionesPreciosController],
  providers: [EdicionesPreciosService],
})
export class EdicionesPreciosModule {}
