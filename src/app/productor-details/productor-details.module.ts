import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule,  ReactiveFormsModule } from '@angular/forms';
import { ProductorDetailsComponent } from './productor-details.component'
import { ProductorDetailsRoutingModule } from './productor-details-routing.module'

@NgModule({
  declarations: [ ProductorDetailsComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ProductorDetailsRoutingModule
  ],
})
export class ProductorDetailsModule { }
