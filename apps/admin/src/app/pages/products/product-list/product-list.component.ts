import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '@firas/products';

@Component({
  selector: 'admin-product-list',
  templateUrl: './product-list.component.html',
  styles: [
  ]
})
export class ProductListComponent implements OnInit{
  products=[];
  constructor(private router:Router,private productsService:ProductsService){
    this._getProducts();
  }
  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method, @typescript-eslint/no-empty-function
  ngOnInit():void{
  }
  private _getProducts(){
    this.productsService.getProducts().subscribe(products=>{
      this.products = products;
    })
  }
  deleteProduct(productId: string){
      this.productsService.deleteProduct(productId).subscribe(response=>{
        this._getProducts();
      })     
  }
  updateProduct(productId: string){
    this.router.navigateByUrl(`products/form/${productId}`)
  }
}
