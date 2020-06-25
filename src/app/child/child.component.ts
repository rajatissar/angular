import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Output() functionVar: EventEmitter<any> = new EventEmitter<any>();
  @Output() functionVar2: EventEmitter<any> = new EventEmitter<any>();

  child1Data = { data: 'data_from_child_to_parent' };
  child1Data2 = { data: 'data_from_child1_to_child2' };

  constructor() { }

  ngOnInit(): void {
    // this.functionVar.emit({ data: 'data_from_child_to_parent' });
  }

  call_child_to_parent_function() {
    this.functionVar.emit(this.child1Data);
  }

  callChildToParent2() {
    this.functionVar2.emit(this.child1Data2);
  }
}
