import { Module } from '@nestjs/common';
import { SucursalesService } from './sucursales.service';

@Module({
  providers: [SucursalesService]
})
export class SucursalesModule {}
