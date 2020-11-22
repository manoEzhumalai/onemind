import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common'
import {FormsModule} from '@angular/forms';

import { LayoutRoutingModule } from './layout-routing.module';
import { layoutComponent } from './layout.component';
import {MaterialModule} from "../service/Material.module"
@NgModule({
  declarations: [
    layoutComponent
  ],
  imports: [
    LayoutRoutingModule,CommonModule,FormsModule,MaterialModule
    ],
  providers: [],
  bootstrap: [layoutComponent]
})
export class LayoutModule { }
