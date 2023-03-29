import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[ngw-button]'
})
export class ButtonDirective {
  @HostBinding('[class.ngwButton]') buttonClass = true;
}
