import { Directive, Input, ElementRef, Renderer, OnInit } from '@angular/core';

@Directive({
  selector: '[appUnit]'
})
export class UnitDirective implements OnInit {
  @Input('appUnit') padding: number;

  constructor(private el: ElementRef, private renderer: Renderer) { }

  ngOnInit(){
    const container = this.el.nativeElement;
    this.renderer.setElementStyle(container, 'padding', `${this.padding}px`);
  }

}
