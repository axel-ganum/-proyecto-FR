
import { Injectable } from '@nestjs/common';

@Injectable()
export class EdicionesPreciosService {
  calcularPrecioFinal(precioOriginal: number, porcentaje: number): number {
    return precioOriginal * (1 + porcentaje / 100);
  }
}
