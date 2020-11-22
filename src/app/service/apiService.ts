import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ToastrService } from 'ngx-toastr';
@Injectable({
    providedIn: 'root'
})
export class ApiCallOneService {

    constructor(private http: HttpClient,private toastr: ToastrService
    ) { }
    api: string = environment.api

    showSuccess(message:any){
        this.toastr.success(message, "")
    }
    showError(){
        this.toastr.error("Error in this page !!!", "Please Retry")
    }
    showInfo(message:any){
        this.toastr.info(message, "")
    }
  
    getProduct() {
        return this.http.get(this.api + "Product");
    }
    addProduct(data:any) {
        var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
        return this.http.post(this.api + "Product",data, { headers: headers });
      }
    orderProduct(data:any) {
      var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      return this.http.post(this.api + "OrderProducts",data, { headers:headers });
    }
}