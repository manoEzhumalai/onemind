import { Component, OnInit,NgZone } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class layoutComponent implements OnInit {
  isCollapsed = true;

  sideData=[{
    name:"product"
  },
  {
    name:"Order"
  }]
  constructor() { 
  
  }



  ngOnInit(): void {
  
  }
 toggle(){
  //  debugger
   var x:any=document.getElementById('mySidebar')
   var y:any=document.getElementById("main")
   if(this.isCollapsed==false){
        x.style.width = "250px"
        y.style.marginLeft = "250px"
   }else{
    x.style.width = "0px"
    y.style.marginLeft = "0px"
   }
   this.isCollapsed=!this.isCollapsed
  }

}
