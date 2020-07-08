import {
  Component,
  OnInit,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {
  @Output() functionVar: EventEmitter<any> = new EventEmitter<any>();
  @Output() functionVar2: EventEmitter<any> = new EventEmitter<any>();

  childToParentData = { data: 'dataFromChildToParent' };
  child1ToChild2Data = { data: 'dataFromChild1ToChild2' };

  constructor() { }

  ngOnInit(): void {
  }

  onPassDataFromChildToParent() {
    this.functionVar.emit(this.childToParentData);
  }

  onPassDataFromChild1ToChild2() {
    this.functionVar2.emit(this.child1ToChild2Data);
  }
}
