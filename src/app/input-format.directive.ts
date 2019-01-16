import { Directive, HostListener, ElementRef, Input } from '@angular/core';
import { format } from 'url';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {

  constructor(private el :ElementRef) {

   }
   @Input('appInputFormat') format:string;
  //  @Input('format') format:string;
  // @HostListener('focus') onFocus(){
  //   console.log('focus is fired');
  // }
  @HostListener('blur') onBlur(){
    let value:string = this.el.nativeElement.value;
    if(this.format=="upper")
      this.el.nativeElement.value = value.toUpperCase();
    else
      this.el.nativeElement.value = value.toLowerCase();

    console.log('blur is fired' + value);
  }
}
