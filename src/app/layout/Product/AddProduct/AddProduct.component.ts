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
  fulldata:any
  loader = true
  constructor( private router: Router ,public service:ApiCallOneService,private fb: FormBuilder) { }
  get f() { return this.profileForm.controls }

  ngOnInit(): void {
    this.getProduct()
}

submit(){
  var x=this.profileForm.value
  var filter= this.fulldata.filter((obj:any)=>obj.productName==x.productName)
  console.log(filter)
  if(filter.length==0){
      this.loader=true

 this.service.addProduct(x).subscribe((data:any) => {
    
    this.loader=false
    this.service.showSuccess('Product Added Successfully !!!')

    this.router.navigate(['list'])


  },error =>{
    this.loader=false
    this.service.showError()

  } )
  }else{
    this.service.showInfo('Product with same name already available !!!')

  }
 
}
getProduct(){
  this.loader=true

  this.service.getProduct().subscribe((data:any) => {
    this.fulldata=data

    console.log(this.fulldata)

    // this.fulldata=this.fulldata.map((obj:any)=>{
    //     if(obj.productName==null){
    //       obj.productName="&&"
    //     }
    //     return obj
    // })
    // this.productList=this.fulldata

    this.loader=false



  },error =>{
    this.loader=false
    this.service.showError()

  } )
}

close(){
  this.router.navigate(['list'])

}

}
