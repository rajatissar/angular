import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output() functionVar: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    // this.functionVar.emit({ data: 'data_from_child_to_parent' });
  }

  call_child_to_parent_function() {
    this.functionVar.emit({ data: 'data_from_child_to_parent' });
  }
}
