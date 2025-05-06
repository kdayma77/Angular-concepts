import { Directive, ElementRef, HostBinding, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[appAutoFocus]',
  standalone: true
})
export class AutoFocusDirective implements AfterViewInit {

  constructor(private el: ElementRef) {}

  @HostBinding('attr.autofocus') autofocus = true;

  ngAfterViewInit(): void {
    // Automatically focus the element after the view is initialized
    this.el.nativeElement.focus();
  }
}
