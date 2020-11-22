import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatSliderModule } from '@angular/material/slider'
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
@NgModule({
imports: [MatButtonModule,MatInputModule, MatSliderModule,MatToolbarModule,MatIconModule,MatListModule,MatCardModule],
exports: [MatButtonModule, MatInputModule,MatSliderModule,MatToolbarModule,MatIconModule,MatListModule,MatCardModule]
})
export class MaterialModule { }