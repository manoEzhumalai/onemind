import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common'
import { ProductListRoutingModule } from './ProductList-routing.module';
import { ProductListComponent } from './ProductList.component';
import { ApiCallOneService} from '../../../service/apiService'
import {MaterialModule} from "../../../service/Material.module"
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductListComponent
   ],
  imports: [
    ProductListRoutingModule,CommonModule,MaterialModule,FormsModule
    ],
  providers: [ApiCallOneService],
  bootstrap: [ProductListComponent]
})
export class ProductListModule { }
