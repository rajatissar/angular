import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})

export class CustomStyleDirective {
  constructor(private element1: ElementRef) {
    this.element1.nativeElement.style.color = 'green';
  }
}
