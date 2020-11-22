import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common'
import { AddProductRoutingModule } from './AddProduct-routing.module';
import { AddProductComponent } from './AddProduct.component';
import { ApiCallOneService} from '../../../service/apiService'
import {MaterialModule} from "../../../service/Material.module"
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddProductComponent
   ],
  imports: [
    AddProductRoutingModule,CommonModule,MaterialModule,FormsModule,ReactiveFormsModule
    ],
  providers: [ApiCallOneService],
  bootstrap: [AddProductComponent]
})
export class AddProductModule { }
