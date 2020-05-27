import { Injectable } from '@angular/core';
import { Actions, Effect, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, from } from 'rxjs';
import { exhaustMap, map, mergeMap, catchError } from 'rxjs/operators';
import { ProductorService } from '../services/productor.service';
import { 
  SuccesscreateProdutor, createProdutor, 
  ProductorActionTypes, AllProductor, 
  UpdateProductor,  
} from '../actions/productor.actions'


@Injectable()
export class ProductorEffects {

  loadProductors$ = createEffect(() => this.actions$.pipe(
    ofType(ProductorActionTypes.ALL),
    mergeMap(() => this.productorService.getAll()
      .pipe(
        map(
          productors => AllProductor(productors)
        ),
        catchError(() => EMPTY)
      ))
    )
  );
  editProductors$ = createEffect(() => this.actions$.pipe(
    ofType(UpdateProductor),
    exhaustMap((action) => this.productorService.update(action.id, action.productor)
      .pipe(
        map(productor => SuccesscreateProdutor({productor})),
        catchError(() => EMPTY) 
      )
    )
  ));

  addProductors$ = createEffect(() => this.actions$.pipe(
    ofType(createProdutor),
    exhaustMap((action) => this.productorService.add(action.productor)
      .pipe(
        map(productor => (SuccesscreateProdutor({productor}))),
        catchError(() => EMPTY) 
      ))
    )
  );
  
  constructor(
    private actions$: Actions,
    private productorService: ProductorService
  ) {}
}