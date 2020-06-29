import {
  Directive,
  OnInit,
  ElementRef,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appRenderer2Style]'
})

export class Renderer2StyleDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'yellow');
  }
}
