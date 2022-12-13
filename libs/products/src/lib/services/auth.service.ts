import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { LocalstorageService } from './localstorage.service';

@Injectable({//<!--"firas halouani"-->
  providedIn: 'root'
})
export class AuthService {
//<!--"firas halouani"-->
  constructor(
    private http: HttpClient,
    private router: Router,private token:LocalstorageService
  ) {}//<!--"firas halouani"-->

  login(email: string, password: string): Observable<User> {
    return this.http.post<User>(`http://localhost:3000/api/v1/users/login`, { email, password });
  }

  logout() {//<!--"firas halouani"-->
    this.token.removeToken();
    this.router.navigate(['/login']);//<!--"firas halouani"-->
  }
}
