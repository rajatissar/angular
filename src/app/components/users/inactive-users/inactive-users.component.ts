import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {
  inactiveUsers = [];

  constructor(private userData: UserService) { }

  ngOnInit(): void {
    this.inactiveUsers = this.userData.inactiveUsers;
  }

  setActive(id: number) {
    this.userData.setActive(id);
  }
}
