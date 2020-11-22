import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { ApiCallOneService} from '../../../service/apiService'
import {MatCard,MatCardActions,MatCardTitle,MatCardContent,MatCardSubtitle,MatCardHeader} from '@angular/material/card';
// ,MatCardActions,MatCardTitle,MatCardContent,MatCardSubtitle,MatCardHeader
import { FormBuilder, Validators, FormControl } from '@angular/forms';

declare var swal: any;
@Component({
  selector: 'app-OrderProduct',
  templateUrl: './OrderProduct.component.html',
  styleUrls: ['./OrderProduct.component.css']
})
export class OrderProductComponent {
  fulldata:any
 
  loader = false
  constructor( private router: Router ,private service:ApiCallOneService,private fb: FormBuilder) { }

  ngOnInit(): void {
    var y:any=localStorage.getItem("product")
    var x=JSON.parse(y)
    console.log(x)
    if(x==null){
      this.router.navigate(['list'])

    }else{
      this.fulldata={
        productId:x.productId,
        name:x.productName,
        avail_quantity:x.availableQuantity,
        quantity:0
      }
      // console.log(x,this.fulldata)
    }
}
productcount(data:any){
  // debugger
  var x=this.fulldata
  if(data==1){
    
    if(x.avail_quantity>x.quantity && x.avail_quantity!=0){
      this.fulldata.quantity=x.quantity+1

    }else{
      var y="You Reached the Max Available product"
      if(x.avail_quantity==0){
        y ="Stock not available Please go for Other Product"
      }
      this.service.showInfo(y)
    }
  }else{
    if(x.quantity!=0){
      this.fulldata.quantity=x.quantity-1
    }
  }

}

submit(){
  var x=this.fulldata
if(x.quantity!=0){
  this.loader=true
  var obj={
    productId:x.productId,
    quantity:x.quantity
  }
  this.service.orderProduct(obj).subscribe((data:any) => {
  
    this.loader=false
    this.service.showSuccess('Order Placed Successfully !!!')

    this.router.navigate(['list'])


  },error =>{
    this.loader=false
    this.service.showError()
  } )
}else{
  this.service.showInfo("Add no of product you need")

}
}
close(){
  this.router.navigate(['list'])

}

}
