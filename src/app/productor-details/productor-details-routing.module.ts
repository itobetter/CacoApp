import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductorDetailsComponent } from './productor-details.component'

const routes: Routes = [
  {
    path: '',
    component: ProductorDetailsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductorDetailsRoutingModule {}
