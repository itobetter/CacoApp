import { Component, OnInit } from '@angular/core';
import { ProductorItem } from '../store/models/productor.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs'
import { Store } from '@ngrx/store';
import { ProductorActionTypes } from '../store/actions/productor.actions'
import { AppState } from '../store/app.store';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  
  ProductorItems: Observable<ProductorItem[]>;

  constructor(private store: Store<{app: AppState}>, private router: Router) { }

  ngOnInit() {
    this.store.dispatch({ type: ProductorActionTypes.ALL});
    this.ProductorItems = this.store.select(state => Array.from(state.app.productors.values())
    );
  }
}