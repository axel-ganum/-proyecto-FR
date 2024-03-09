
import { Controller, Get, Query, Param, ParseIntPipe } from '@nestjs/common';
import { EdicionesPreciosService } from './ediciones_precios.service';

@Controller('ediciones-precios')
export class EdicionesPreciosController {
  constructor(private readonly edicionesPreciosService: EdicionesPreciosService) {}

  @Get('/calcular-precio-final')
  calcularPrecioFinal(
    @Query('precioOriginal', ParseIntPipe) precioOriginal: number,
    @Query('porcentaje', ParseIntPipe) porcentaje: number,
  ): { precioFinal: number } {
    const precioFinal = this.edicionesPreciosService.calcularPrecioFinal(precioOriginal, porcentaje);
    return { precioFinal };
  }
}
