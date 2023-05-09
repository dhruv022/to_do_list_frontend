import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
  get MemberAuth() {
    if(localStorage.getItem('token')){
      return true;
    }
    return false;
  }
}
