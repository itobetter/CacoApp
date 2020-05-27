import { createAction, props } from '@ngrx/store';
import { ProductorItem } from '../models/productor.model'

export enum ProductorActionTypes {
  ADD = '[PRODUCTOR] Add Item',
  ADDSUCCESS = '[PRODUCTOR] Added Item',
  UPDATE = '[PRODUCTOR] Edit Item',
  ALL = '[PRODUCTOR] Get all Item',
  ALLSUCCESS = '[PRODUCTOR] Get all Item success',
  GET = '[PRODUCTOR] Get one Item',
}

export const createProdutor = createAction(
    ProductorActionTypes.ADD,
    props<{productor: ProductorItem}>()
);
export const SuccesscreateProdutor = createAction(
    ProductorActionTypes.ADDSUCCESS,
    props<{productor: ProductorItem}>()
);
export const UpdateProductor = createAction(
    ProductorActionTypes.UPDATE,
    props<{
        id: number,
        productor: ProductorItem
    }>()
);
export const AllProductor = createAction(
    ProductorActionTypes.ALLSUCCESS,
    (productors: ProductorItem[]) => { 
        return {productors: productors.reduce((map, obj): Map<number,ProductorItem> => {
                map.set(obj.id, obj); 
                return map;
            }, new Map<number,ProductorItem>())
        }
    }
);
export const GetProductor = createAction(
    ProductorActionTypes.GET,
    props<{ id: number; }>()
);