import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  name: string;

  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    console.log('router data', this.router.snapshot.params);
    if (this.router.snapshot.params.id === '1') {
      this.name = 'Rajat';
    } else if (this.router.snapshot.params.id === '2') {
      this.name = 'Vivek';
    } else {
      this.name = 'Stranger';
    }
  }

}
