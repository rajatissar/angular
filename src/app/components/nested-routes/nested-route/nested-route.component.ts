import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Observable } from 'rxjs';

// guard
import { CanComponentDeactivate } from '../../../guard/auth.guard';

@Component({
  selector: 'app-nested-route',
  templateUrl: './nested-route.component.html',
  styleUrls: ['./nested-route.component.css']
})

export class NestedRouteComponent implements OnInit, CanComponentDeactivate {
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

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    console.log('canDeactivate has fired in the component!');
    if (confirm('You have unsaved changes! If you leave, your changes will be lost.')) {
      return true;
    } else {
      return false;
    }
  }

  customMethod() { }

}
