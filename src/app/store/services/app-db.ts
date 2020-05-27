import Dexie from 'dexie';
import relationships from 'dexie-relationships'
import {ProductorItem} from '../models/productor.model'

export class Database extends Dexie {
    productor: Dexie.Table<ProductorItem, number>;
    constructor() {
        super('Database', {addons: [relationships]});
        this.version(1).stores({
            productor: '++id,apellidos_productor,nombres_productor,&numero_id,fecha_nacimiento,genero,lote_id,telefono_convencional,telefono_celular,nivel_educacion,nombre_aso_gremio,provincia_prod,canton_productor,parroquia_productor,comunidad_recinto'  
        });
    }
}
