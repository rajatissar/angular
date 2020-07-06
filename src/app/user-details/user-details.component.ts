import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  id: string;
  name: string;
  lastName: string;
  email: string;
  fragment: string;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    console.log('route data (params)', this.route.snapshot.params);
    this.id = this.route.snapshot.params.id;
    this.name = this.route.snapshot.params.name || 'stranger';

    this.route.params
      .subscribe((params: Params) => {
        this.id = params.id;
        this.name = params.name;
      });

    console.log('route data (queryParams)', this.route.snapshot.queryParams);
    this.lastName = this.route.snapshot.queryParams.lastName || 'no last name';
    this.email = this.route.snapshot.queryParams.email || 'no email';

    this.route.queryParams
      .subscribe((queryParams: Params) => {
        this.lastName = queryParams.lastName || 'no last name';
        this.email = queryParams.email || 'no email';
      });

    console.log('route data (fragment)', this.route.snapshot.fragment);
    this.fragment = this.route.snapshot.fragment || 'no fragment';
    this.route.fragment
      .subscribe((fragment) => {
        // this.fragment = fragment || 'no fragment';
      });
  }

}
