export class CreateProductWithDetailsDto {
   producto: string;
   precio: number;
   stock: number;
   descripcion: string;
   
   // Detalles de las entidades relacionadas
   marca: string;
   modelo: string;
   sucursal: string;
   ciudad: string;
   categoria: string
}
