import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output() callParentFunction: EventEmitter<any> = new EventEmitter<any>()

  // @Output() callParentFunction = new EventEmitter<any>();

  // @Output("callParentFunction") callParentFunction: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.callParentFunction.emit({ data: 'data_from_child_to_parent' });
  }

  call_child_to_parent_function() {
    this.callParentFunction.emit({ data: 'data_from_child_to_parent' });
  }

}
