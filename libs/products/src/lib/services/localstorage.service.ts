import { Injectable } from '@angular/core';
const TOKEN = 'jwtToken'
@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor(){}//<!--"firas halouani"-->
  setToken(data: string) {
    localStorage.setItem(TOKEN, data);
  }//<!--"firas halouani"-->

  getToken():string {
    return localStorage.getItem(TOKEN);//<!--"firas halouani"-->
  }

  removeToken() {
    localStorage.removeItem(TOKEN);
  }//<!--"firas halouani"-->
}
