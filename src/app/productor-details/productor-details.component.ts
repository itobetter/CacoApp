import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Data }  from '../store/metadata';
import { ProductorItem } from '../store/models/productor.model';
import { AppState } from '../store/app.store';
import { ProductorActionTypes, createProdutor, UpdateProductor } from '../store/actions/productor.actions'

@Component({
  selector: 'app-productor-details',
  templateUrl: './productor-details.component.html',
  styleUrls: ['./productor-details.component.scss'],
})
export class ProductorDetailsComponent implements OnInit {
  productor : FormGroup;
  binary = Data.binary
  states = Data.states
  originplts = Data.origin_plants
  freq_rainly = Data.freq_rainly
  customers = Data.customers
  sale_place = Data.sale_place
  id: number | null;
  ProductorItem: Observable<ProductorItem>;

  constructor( 
    private formBuilder: FormBuilder, 
    public router: Router,  
    private route: ActivatedRoute,
    private store: Store<{app:AppState}>
  ) {}

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get("id") || null;
    this.ProductorItem = this.store.select(store => store.app.productors.get(this.id));
    this.productor = this.formBuilder.group({
      apellidos_productor: ["" , Validators.required],
      nombres_productor: ["", Validators.required],
      numero_id: ["", Validators.required],
      fecha_nacimiento: ["", Validators.required],
      genero: ["", Validators.required],
      lote_id: [""],
      telefono_convencional: [""],
      telefono_celular: [""],
      nivel_educacion: [""],
      asocia_gremio: [""],
      nombre_aso_gremio: [""],
      provincia_prod: ["", Validators.required],
      canton_productor: ["", Validators.required],
      parroquia_productor: ["", Validators.required],
      comunidad_recinto: ["", Validators.required],
    });
    this.ProductorItem.subscribe(data => data && this.productor.patchValue(data));
  }
  
  ProductorForm() {
    if (!this.id){
      this.store.dispatch(createProdutor({productor: this.productor.value}));
    } else{
      this.store.dispatch(UpdateProductor({id: this.id , productor: this.productor.value}));
    }    
    return this.router.navigate(['tabs/tab1'])
  }  
}

