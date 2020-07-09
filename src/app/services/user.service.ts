import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  activeUsers = ['Rajat', 'Ankur'];
  inactiveUsers = ['Sumit', 'Chirag'];

  constructor() { }

  getData(data) {
    console.log('user-service -> getData ->>', data);
  }

  setActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
  }

  setInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
  }
}
