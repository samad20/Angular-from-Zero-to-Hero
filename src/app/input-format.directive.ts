import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]',
})
export class InputFormatDirective {
  // @HostListener('focus') onfocus() {
  //   console.log('on focus');
  // }

  @Input('format')
  format: string = '';
  @HostListener('blur') onBlur() {
    let value: string = this.el.nativeElement.value;
    if (this.format == 'uppercase')
      this.el.nativeElement.value = value.toUpperCase();
    else this.el.nativeElement.value = value.toLowerCase();
  }
  constructor(private el: ElementRef) {}
}
