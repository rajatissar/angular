import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {
  activeUsers = [];

  constructor(private userData: UserService) { }

  ngOnInit(): void {
    this.activeUsers = this.userData.activeUsers;
  }

  setInactive(id: number) {
    this.userData.setInactive(id);
  }

}
