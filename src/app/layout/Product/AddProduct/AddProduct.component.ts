import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { ApiCallOneService} from '../../../service/apiService'
import {MatCard,MatCardActions,MatCardTitle,MatCardContent,MatCardSubtitle,MatCardHeader} from '@angular/material/card';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-AddProduct',
  templateUrl: './AddProduct.component.html',
  styleUrls: ['./AddProduct.component.css']
})
export class AddProductComponent {
  profileForm = this.fb.group({
    productName: ['', [Validators.required]],
    availableQuantity: ['', [Validators.required]],

  });

  loader = true
  constructor( private router: Router ,public service:ApiCallOneService,private fb: FormBuilder) { }
  get f() { return this.profileForm.controls }

  ngOnInit(): void {
}

submit(){
  this.loader=true

  this.service.addProduct(this.profileForm.value).subscribe((data:any) => {
    
    this.loader=false
    this.service.showSuccess('Product Added Successfully !!!')

    this.router.navigate(['list'])


  },error =>{
    this.loader=false
    this.service.showError()

  } )
}

close(){
  this.router.navigate(['list'])

}

}
