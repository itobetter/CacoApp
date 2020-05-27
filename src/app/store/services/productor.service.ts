import { Injectable } from '@angular/core';
import Dexie from 'dexie';
import { Database } from './app-db';
import { ProductorItem, ProductorWithID } from '../models/productor.model'
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductorService {
  productor: Dexie.Table<ProductorItem, number>;

  constructor(private db: Database) {
    this.productor = this.db.table('productor')
  }

  getAll() {return from(this.productor.toArray());}
  
  add(data: ProductorItem){
    return from(
      this.productor.add(data).then(id => this.productor.get(id))
    );
  }

  update(id: number, data: ProductorItem) {
    return from(
      this.productor.update(id, data).then(updated => this.productor.get(id))
    );
  }

  remove(id: number) {
    return from(this.productor.delete(id));
  }
}