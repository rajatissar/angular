import {
  Component,
  OnInit,
  Input,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() var1: string[];
  @Input() var2: string[];

  constructor() { }

  ngOnInit(): void {
    console.log('ngOnInit parentToChildData ->>', this.var1);
    console.log('ngOnInit child1ToChild2Data ->>', this.var2);
  }

}
