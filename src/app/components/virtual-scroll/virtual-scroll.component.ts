import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-virtual-scroll',
  templateUrl: './virtual-scroll.component.html',
  styleUrls: ['./virtual-scroll.component.css']
})

export class VirtualScrollComponent implements OnInit {
  numbers: number[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  generateVirtualScroll() {
    const numbers = [];
    for (let index = 0; index < 10000; index++) {
      numbers.push(index);
    }
    this.numbers = [...numbers];
  }

}
