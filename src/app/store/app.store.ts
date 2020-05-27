import { ProductorItem } from './models/productor.model'


export interface AppState {
    productors: Map<number,ProductorItem>
}

export const initialState: AppState = {
    productors: new Map<number,ProductorItem>()   
} 