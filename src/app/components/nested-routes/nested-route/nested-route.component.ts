import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-nested-route',
  templateUrl: './nested-route.component.html',
  styleUrls: ['./nested-route.component.css']
})

export class NestedRouteComponent implements OnInit {
  id: string;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id || 'no_id_found';
    this.route.params
      .subscribe((params: Params) => {
        this.id = params.id || 'no_id_found';
      });
  }

}
