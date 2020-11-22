import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { layoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: layoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'list'
      },
      
      {
        path: 'list',
        loadChildren: () => import('./Product/ProductList/ProductList.module').then(m => m.ProductListModule)
      },
      {
        path: 'add',
        loadChildren: () => import('./Product/AddProduct/AddProduct.module').then(m => m.AddProductModule)
      },
      {
        path: 'order',
        loadChildren: () => import('./Product/OrderProduct/OrderProduct.module').then(m => m.OrderProductModule)
      },
      {path: '**', redirectTo: 'list'}

    
    ]
  }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
