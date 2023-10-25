import {Directive, HostListener, Input} from "@angular/core";

@Directive({
  selector: "a[confirm]"
})
export class ConfirmDirective {

  @Input('confirm-message')
  confirmMessage = 'Vous vous rendez sur un autre site. Êtes vous certain de votre décision ?';

  @HostListener('click')
  onClick() {
    return window.confirm(this.confirmMessage);
  }
}
