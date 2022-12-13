import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'//<!--"firas halouani"-->
})
export class UsersService {//<!--"firas halouani"-->

  constructor(private http: HttpClient) {
  }//<!--"firas halouani"-->

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/api/v1/users');//<!--"firas halouani"-->
  }

  getUser(userId: string): Observable<User> {
    return this.http.get<User>(`http://localhost:3000/api/v1/users/${userId}`);//<!--"firas halouani"-->
  }

  createUser(user: User): Observable<User> {
    return this.http.post<User>('http://localhost:3000/api/v1/users', user);//<!--"firas halouani"-->
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`http://localhost:3000/api/v1/users/${user.id}`, user);//<!--"firas halouani"-->
  }

  deleteUser(userId: string): Observable<any> {//<!--"firas halouani"-->
    return this.http.delete<any>(`http://localhost:3000/api/v1/users/${userId}`);
  }


}
