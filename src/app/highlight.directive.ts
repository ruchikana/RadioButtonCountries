import { Directive,ElementRef, Input,HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
@Input('Hightlight') color
@HostListener('mouseenter')
onMouseEnter()
{
  this._el.nativeElement.stylebackgroundcolor=this.color;
}

  @HostListener('mouseleave')
onMouseLeave()
{
  this._el.nativeElement.stylebackgroundcolor=null;
}


  constructor(private _el:ElementRef) {
     console.log('element reference',this._el);

   }

}
