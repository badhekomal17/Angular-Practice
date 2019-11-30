import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-management',
  //templateUrl: './product-management.component.html',
  templateUrl:'./product-management.component.html',
  
  styleUrls: ['./product-management.component.css']
})
export class ProductManagementComponent implements OnInit {

  
  showImage : boolean = false;

  constructor(public ps:ProductService){}

  Product:any[]=[];

  // For used Service
ngOnInit() {
this.Product=this.ps.getAllProducts();
  }

   // Here Void is function return type it is [optional]
   toggleImage():void{
    this.showImage = !this.showImage;
  }

}
