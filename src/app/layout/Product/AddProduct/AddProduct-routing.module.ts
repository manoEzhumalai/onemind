import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AddProductComponent } from './AddProduct.component';

const routes: Routes = [
  {
    path: '',
    component: AddProductComponent,
    children: [
     
    ]
  },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AddProductRoutingModule {}
