import { Injectable } from '@angular/core';

interface UserType {
  firstName: string;
  lastName: string;
  email: string;
  isAlive: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class ModalService {

  constructor() { }

  getData() {
    const user: UserType[] = [{
      firstName: 'Rajat',
      lastName: 'Kumar',
      email: 'rajat.kumar@daffodilsw.com',
      isAlive: true
    }];
    return user;
  }
}
