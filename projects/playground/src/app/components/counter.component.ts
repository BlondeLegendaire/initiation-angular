import {Component, Input} from "@angular/core";

@Component({
  selector: 'counter',
  template: `
    Valeur : <strong> {{ value }}</strong>
    <button (click)="onClickButton(true)">+</button>
    <button (click)="onClickButton(false)">-</button>
  `
})
export class CounterComponent{
  @Input("initial-value")
  value= 0;
  @Input("step")
  step = 1;

  onClickButton(add: boolean){
    add ? this.value += this.step : this.value -= this.step;
  }

}
