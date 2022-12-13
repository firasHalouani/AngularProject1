import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService, Category } from '@firas/products';
import { ConfirmationService, MessageService } from 'primeng/api';
@Component({
  selector: 'admin-categories-list',
  templateUrl: './categories-list.component.html',
  styles: [
  ]
})
export class CategoriesListComponent {
  categories:Category[]=[];

  constructor(private router:Router,private messageService: MessageService,private confirmationService: ConfirmationService,private categoriesService: CategoriesService){
    this._getCategories()
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOninit():void{
  }
  deleteCategory(categoryId: string){
    this.confirmationService.confirm({
      message: 'Do u want to delete this category ?',
      header: 'Delete Category',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.categoriesService.deleteCategory(categoryId).subscribe(response=>{
          this._getCategories();
          this.messageService.add({severity:'success', summary:'Success', detail:'Category is deleted'});
        },(error)=>{
          this.messageService.add({severity:'error', summary:'Error', detail:'Category is not deleted'});
        });      
      },
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      reject: (type) => {}
  });
    
  }
  updateCategory(categoryId: string){
    this.router.navigateByUrl(`categories/form/${categoryId}`)
  }
  private _getCategories(){
    this.categoriesService.getCategories().subscribe((cat)=>{
      this.categories = cat;
    });
  }
}
