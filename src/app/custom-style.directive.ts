import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  constructor(private element1: ElementRef) {
    element1.nativeElement.style.color = 'green';
  }
}
