import { ProductorItem } from '../models/productor.model'

export interface AppState {
    selectedProductor: ProductorItem;
    allProductors: ProductorItem[];
}

export const selectProductor = (state: AppState) => state.selectedProductor;
export const selectAllProductors = (state: AppState) => state.allProductors;
