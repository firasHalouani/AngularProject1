import { Component } from '@angular/core';
import { Router } from '@angular/router';//<!--"firas halouani"-->
import { User, UsersService } from '@firas/products';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({//<!--"firas halouani"-->
  selector: 'admin-users-list',
  templateUrl: './users-list.component.html',
  styles: [
  ]
})
export class UsersListComponent {
  users:User[]=[];//<!--"firas halouani"-->

  constructor(private usersService: UsersService,private router:Router,private messageService: MessageService,private confirmationService: ConfirmationService){
        this._getUsers();

  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  ngOninit():void{
  }

  deleteUser(userId: string){//<!--"firas halouani"-->
    this.confirmationService.confirm({
      message: 'Do u want to delete this user ?',
      header: 'Delete user',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.usersService.deleteUser(userId).subscribe(()=>{
          this._getUsers();
          this.messageService.add({severity:'success', summary:'Success', detail:'User is deleted'});
        },()=>{
          this.messageService.add({severity:'error', summary:'Error', detail:'User is not deleted'});
        });      
      },
  });
    //<!--"firas halouani"-->
  }
  updateUser(userId: string){
    this.router.navigateByUrl(`users/form/${userId}`)
  }//<!--"firas halouani"-->
  private _getUsers(){
    this.usersService.getUsers().subscribe((cat)=>{
      this.users = cat;//<!--"firas halouani"-->
    });
  }
}
