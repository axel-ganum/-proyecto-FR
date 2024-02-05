export class CreateProductWithDetailsDto {
   producto: string;
   codigo_de_barras: number;
   precio: number;
   stock: number;
   url_imagen: string;
   descripcion: string;
   
   // Detalles de las entidades relacionadas
   marca: string;
   modelo: string;
   sucursal: string;
   ciudad: string;
}
