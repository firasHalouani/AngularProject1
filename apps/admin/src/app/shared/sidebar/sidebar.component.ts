import { Component } from '@angular/core';
// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { AuthService } from 'libs/products/src/lib/services/auth.service';

@Component({
  selector: 'admin-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(private authService: AuthService){}
  logoutUser(){
    this.authService.logout();
  }
  
}
