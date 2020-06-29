import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  constructor() { }

  get_data(data) {
    console.log('user-service -> get_data ->>', data);
  }
}
