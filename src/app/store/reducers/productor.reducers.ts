import { createReducer, on } from '@ngrx/store';
import { 
  SuccesscreateProdutor, UpdateProductor, 
  GetProductor, AllProductor 
} from '../actions/productor.actions';
import { initialState, AppState} from '../app.store'
import { Action } from '@ngrx/store';


const _AlterState = createReducer(initialState,
  
  on(AllProductor, (state, prod: any) => ({ ...state, productors: prod.productors})) ,
  // on(SuccesscreateProdutor, (state, { productor }) => state.productors.set(productor.id, productor)),  
  on(SuccesscreateProdutor, (state, { productor }) =>  ({...state, productors: state.productors.set(productor.id, productor)})),
);

export function StateReducer(state: AppState | undefined, action: Action) {
  return _AlterState(state, action);
}