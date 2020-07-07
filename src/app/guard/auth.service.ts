import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  constructor() { }

  isLoggedIn = true;

  isAuthenticated() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        return resolve(this.isLoggedIn);
      }, 1000);
    });
  }

  login() {
    this.isLoggedIn = true;
  }

  logout() {
    this.isLoggedIn = false;
  }
}
