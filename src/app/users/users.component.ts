import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  // constructor() { }

  @Input() var1;

  ngOnInit(): void {
    console.log('parent to child data ->>', this.var1);
  }

}
