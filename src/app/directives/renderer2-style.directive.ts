import {
  Directive,
  OnInit,
  ElementRef,
  Renderer2,
  HostListener,
  HostBinding
} from '@angular/core';

@Directive({
  selector: '[appRenderer2Style]'
})

export class Renderer2StyleDirective implements OnInit {
  @HostBinding('style.color') color = 'yellow';

  constructor(private elRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit() {
    // this.renderer.setStyle(this.elRef.nativeElement, 'color', 'yellow');
    // this.color = 'yellow';
  }

  @HostListener('mouseenter') mouseenter(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'red');
    this.color = 'red';
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'color', 'yellow');
    this.color = 'yellow';
  }
}
