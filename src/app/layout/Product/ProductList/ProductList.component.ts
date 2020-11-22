import { Component } from '@angular/core';

import { Router } from '@angular/router';
import { ApiCallOneService} from '../../../service/apiService'
import {MatCard,MatCardActions,MatCardTitle,MatCardContent,MatCardSubtitle,MatCardHeader} from '@angular/material/card';
// ,MatCardActions,MatCardTitle,MatCardContent,MatCardSubtitle,MatCardHeader

declare var swal: any;
@Component({
  selector: 'app-ProductList',
  templateUrl: './ProductList.component.html',
  styleUrls: ['./ProductList.component.css']
})
export class ProductListComponent {
 
  search:any = ''
productList:any
fulldata:any
  loader = true
  constructor( private router: Router ,private service:ApiCallOneService) { }
  
  ngOnInit(): void {
    localStorage.clear()
   this.getProduct()
}
gotoadd(){
  this.router.navigate(['add'])

}

gotoOrder(data:any){
  localStorage.setItem("product",JSON.stringify(data))
  this.router.navigate(['order'])

}
getProduct(){
  this.loader=true

  this.service.getProduct().subscribe((data:any) => {
    this.fulldata=data
    this.fulldata=this.fulldata.map((obj:any)=>{
        if(obj.productName==null){
          obj.productName="&&"
        }
        return obj
    })
    this.productList=this.fulldata

    this.loader=false



  },error =>{
    this.loader=false
    this.service.showError()

  } )
}
searchFunction(){
  // console.log(this.search)
  if(this.search==""){
    this.productList=this.fulldata
  }else{
    // debugger
    this.productList=this.fulldata.filter((obj:any) => obj.productName.toUpperCase().startsWith(this.search.toUpperCase()))
  }


}
}
