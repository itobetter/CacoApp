export interface ProductorItem {
    id?: number;
    apellidos_productor: string,
    nombres_productor: string,
    numero_id: number,
    fecha_nacimiento: string,
    genero: string,
    lote_id: string,
    telefono_convencional: string,
    telefono_celular: string,
    nivel_educacion: string,
    nombre_aso_gremio: string,
    provincia_prod: string,
    canton_productor: string,
    parroquia_productor: string,
    comunidad_recinto: string
  }
  
  export interface ProductorWithID extends ProductorItem {
    id: number;
  }