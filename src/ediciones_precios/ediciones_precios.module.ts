import { Module } from '@nestjs/common';
import { EdicionesPreciosService } from './ediciones_precios.service';

@Module({
  providers: [EdicionesPreciosService]
})
export class EdicionesPreciosModule {}
