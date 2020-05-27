import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LotePageRoutingModule } from './lote-routing.module';

import { LotePage } from './lote.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    LotePageRoutingModule
  ],
  declarations: [LotePage]
})
export class LotePageModule {}
