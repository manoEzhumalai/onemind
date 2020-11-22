import { TestBed,ComponentFixture,async,inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import {ApiCallOneService} from "./service/apiService"
import { AddProductComponent } from './layout/Product/AddProduct/AddProduct.component';
import {MaterialModule} from "./service/Material.module"
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('AddProductComponent', () => {

  let component:AddProductComponent
  let fixture:ComponentFixture<AddProductComponent>
  let service:ApiCallOneService
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,HttpClientModule,ToastrModule.forRoot(),BrowserAnimationsModule,  
        MaterialModule,FormsModule,ReactiveFormsModule,
      ],
      declarations: [
        AddProductComponent
      ],
      providers:[ApiCallOneService]
    }).compileComponents();
    fixture=TestBed.createComponent(AddProductComponent)
    component =fixture.componentInstance
    fixture.detectChanges()
    service=TestBed.get(ApiCallOneService)
  });

  it('should create the Add Product Component', () => {
    expect(component).toBeTruthy();
  });
  it('should Check the Service', () => {
    expect(service instanceof ApiCallOneService).toBeTruthy();
  });
  it('should inject service using inject function',
       inject([ApiCallOneService],(service:ApiCallOneService)=> {
        expect(component).toBeTruthy();

    expect(service instanceof ApiCallOneService).toBeTruthy();
  }));
  it(`should have as Api 'https://uiexercise.onemindindia.com/api/'`, () => {
    expect(component.service.api).toEqual('https://uiexercise.onemindindia.com/api/');
  });
  it(`Should check the product Quantity is invalid`, () => {
   var data:any= component.profileForm.controls['availableQuantity']
    expect(data.valid).toBeFalsy()
    expect(data.pristine).toBeTruthy()

    expect(data.errors['required']).toBeTruthy()
  });
  it(`[form check] - should check the form is valid or not after entered the value`, () => {
    component.profileForm.controls['productName'].setValue("Laptop")
    component.profileForm.controls['availableQuantity'].setValue(4)

     expect(component.profileForm.valid).toBeTruthy()
   });
  


 
});
