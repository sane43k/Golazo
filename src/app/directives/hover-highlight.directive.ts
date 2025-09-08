import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]',
  standalone: true
})
export class HoverHighlightDirective {
  @Input('appHoverHighlight') highlightColor: string = '';

  private originalBgColor: string = 'transparent';
  private originalBorderRadius: string = '0px';

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
  ) { };

  @HostListener('mouseenter')
  onMouseEnter() {
    this.originalBgColor = this.el.nativeElement.style.backgroundColor;
    this.originalBorderRadius = this.el.nativeElement.style.borderRadius;

    this.renderer.setStyle(this.el.nativeElement, 'background', this.highlightColor);
    this.renderer.setStyle(this.el.nativeElement, 'border-radius', '10px');
  };

  @HostListener('mouseleave')
  onMouseLeave() {
    this.renderer.setStyle(this.el.nativeElement, 'background', this.originalBgColor);
    this.renderer.setStyle(this.el.nativeElement, 'border-radius', this.originalBorderRadius);
  };

}
