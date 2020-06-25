import {
  Component,
  OnInit,
  AfterViewInit,
  ContentChild,
  ElementRef
} from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})

export class Child2Component implements OnInit, AfterViewInit {

  @ContentChild('contentChild1') contentChild1: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit ->>', this.contentChild1.nativeElement.textContent);
  }

}
