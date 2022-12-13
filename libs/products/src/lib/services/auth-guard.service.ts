import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root'
})//<!--"firas halouani"-->
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private localStorageToken: LocalstorageService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const token = this.localStorageToken.getToken();
//<!--"firas halouani"-->
    if (!token) {
      this.router.navigate(['/login']);
      return false;//<!--"firas halouani"-->
    }else{
      return true;
    }//<!--"firas halouani"-->
    }

}
