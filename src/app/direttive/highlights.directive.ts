import { Directive, ElementRef, HostListener, ViewChild } from '@angular/core';

@Directive({
  selector: '[appHighlights]'
})
export class HighlightsDirective {

  constructor(private element:ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.element.nativeElement.style.backgroundColor ='gray'
    this.element.nativeElement.style.backgroundRadius ='10px'
    }
    
    @HostListener('mouseleave') onMouseLeave() {
      this.element.nativeElement.style.backgroundColor ='transparent'
    this.element.nativeElement.style.backgroundRadius ='10px'
      }
      
}


