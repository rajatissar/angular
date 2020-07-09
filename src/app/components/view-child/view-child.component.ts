import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})

export class ViewChildComponent implements OnInit {
  @ViewChild('input1') input1: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onViewChild() {
    console.log('onViewChild ->>', this.input1.nativeElement.value);
  }

}
