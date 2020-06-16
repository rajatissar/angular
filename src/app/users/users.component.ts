import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  // constructor() { }

  @Input() heros;

  ngOnInit(): void {
    console.log('this.heros', this.heros);
  }

}
