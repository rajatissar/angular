import {
  Component,
  OnInit,
  AfterViewInit,
  OnChanges,
  ContentChild,
  ElementRef,
  Input
} from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})

export class Child2Component implements OnInit, AfterViewInit, OnChanges {

  @ContentChild('contentChild1') contentChild1: ElementRef;
  @Input() var2: any;

  constructor() { }

  ngOnChanges(changes) {
    console.log('data from child1 to child2', this.var2);
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit ->>', this.contentChild1 && this.contentChild1.nativeElement.textContent);
  }

}
