import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common'
import { OrderProductRoutingModule } from './OrderProduct-routing.module';
import { OrderProductComponent } from './OrderProduct.component';
import { ApiCallOneService} from '../../../service/apiService'
import {MaterialModule} from "../../../service/Material.module"
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    OrderProductComponent
   ],
  imports: [
    OrderProductRoutingModule,CommonModule,MaterialModule,FormsModule,ReactiveFormsModule
    ],
  providers: [ApiCallOneService],
  bootstrap: [OrderProductComponent]
})
export class OrderProductModule { }
