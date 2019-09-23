import { Directive, Input, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '[appUnderLine]'
})
export class UnderLineDirective { 
  @Input('underline') underline
  @Input('color') color
  @Input('tsize') tsize
  @HostListener('mouseenter')
  onMouseEnter(){
    this._el.nativeElement.style.textDecoration='underline';
    this._el.nativeElement.style.backgroundColor=this.color;
    this._el.nativeElement.style.color='red';
    this.tsize = this.tsize || '20px';
    this._el.nativeElement.style.fontSize=this.tsize;

    
  }

  @HostListener('mouseleave')
  onMouseLeave(){
    this._el.nativeElement.style.textDecoration=null;
    this._el.nativeElement.style.backgroundColor=null;
    this._el.nativeElement.style.color=null;
    this._el.nativeElement.style.fontSize=null;

  }

  constructor(private _el:ElementRef ) { 
        // this._el.nativeElement.style.textDecoration='underline';   
      
      }

}
