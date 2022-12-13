import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CategoriesService, Product, ProductsService } from '@firas/products';
import { MessageService } from 'primeng/api';
import { timer } from 'rxjs';

@Component({
  selector: 'admin-products-form',
  templateUrl: './products-form.component.html',
  styles: [
  ]
})
export class ProductsFormComponent implements OnInit{
  editmode=false;
  form:FormGroup;
  isSubmitted = false;
  categories = [];
  imageDisplay: string | ArrayBuffer;
  currentProductId:string;

  constructor(private route:ActivatedRoute,private formBuilder:FormBuilder,private location:Location,private messageService:MessageService,private productsService:ProductsService, private categoriesService:CategoriesService){

  }
  ngOnInit():void{
    this._initForm();
    this._getCategories();
    this._checkEditMode();
  }
  private _initForm(){
    this.form = this.formBuilder.group({
      name:['',Validators.required],
      brand:['',Validators.required],
      price:['',Validators.required],
      category:['',Validators.required],
      countInStock:['',Validators.required],
      description:['',Validators.required],
      richDescription:[''],
      image:['',Validators.required],
      isFeatured:[false],
    });
  }
  private _getCategories(){
    this.categoriesService.getCategories().subscribe(categories=>{
      this.categories = categories;
    })
  }
  private _updateProduct(productFormDate:FormData){
    this.productsService.updateProduct(productFormDate,this.currentProductId).subscribe(() =>{
      this.messageService.add({severity:'success', summary:'Success', detail:'Product is updated'});
      timer(3000).toPromise().then(done=>{
        this.location.back();
      })
    },(error)=>{
      this.messageService.add({severity:'error', summary:'Error', detail:'Product is not updated'});
    });
  }
  private _checkEditMode(){
    this.route.params.subscribe(params=>{
      if(params.id){
        this.editmode = true;
        this.currentProductId = params.id;
        this.productsService.getProduct(params.id).subscribe((product)=>{
          this.productForm.name.setValue(product.name);
          this.productForm.category.setValue(product.category.id); 
          this.productForm.brand.setValue(product.brand);
          this.productForm.price.setValue(product.price);
          this.productForm.countInStock.setValue(product.countInStock);
          this.productForm.isFeatured.setValue(product.isFeatured);
          this.productForm.description.setValue(product.description);
          this.productForm.richDescription.setValue(product.richDescription);
          this.imageDisplay = product.image;
          this.productForm.image.setValidators([]);
          this.productForm.image.updateValueAndValidity();
        })
      }
    })
  }
  onSubmit(){
    this.isSubmitted =true;
    if(this.form.invalid)
    return;
    const productFormDate = new FormData();
    Object.keys(this.productForm).map((key)=>{
      productFormDate.append(key,this.productForm[key].value);
    })
    //productFormDate.append('name',this.productForm.name.value);
    if(this.editmode){
      this._updateProduct(productFormDate);
    }else{
      this._addProduct(productFormDate);
    }

  }
  private _addProduct(productData: FormData){//<!--"firas halouani"-->
    this.productsService.createProduct(productData).subscribe((product:Product) =>{
      this.messageService.add({severity:'success', summary:'Success', detail:'product is created'});
      timer(3000).toPromise().then(done=>{//<!--"firas halouani"-->
        this.location.back();
      })//<!--"firas halouani"-->
    },(error)=>{
      this.messageService.add({severity:'error', summary:'Error', detail:'Product is not created'});
    });
  }
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onCancle(){
    this.location.back();
  }
  onImageUpload(event){
    const file = event.target.files[0];
    if(file){
      this.form.patchValue({image: file});
      this.form.get('image').updateValueAndValidity();
      const fileReader = new FileReader();
      fileReader.onload = () =>{//<!--"firas halouani"-->
        this.imageDisplay = fileReader.result
      }
      fileReader.readAsDataURL(file);
    }
  }
  get productForm(){//<!--"firas halouani"-->
    return this.form.controls;
  }
}
//<!--"firas halouani"-->