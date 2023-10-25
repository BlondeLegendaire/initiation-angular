import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from "@angular/core";
import {first} from "rxjs";

@Component({
  selector: 'user-profile',
  template: `
      <h3 [class.hired]="isHired">{{ firstname | titlecase}} {{ lastname | uppercase }}</h3>
      <img [src]="avatar" />
      Métier : <strong>{{ job }}</strong> ({{revenue | currency: 'EUR':'symbol' }} / mois)
      <button (click)="onClickButton($event.clientX)" >Embaucher</button>
      <input
        #prenom
        type="text"
        placeholder="Nouveau prénom">
      <button (click)="changePrenom()">Changer le prénom</button>
    `,
  styles: [
    `
    .hired{
      background-color: blue;
    }
    `
  ]
})
export class UserProfileComponent implements OnInit, AfterViewInit{
  ngOnInit(): void {
      // lol
  }
  @ViewChild('prenom')
  prenom?: ElementRef<HTMLInputElement>;
  @Input('first-name')
  firstname = '';
  @Input('last-name')
  lastname = '';
  @Input()
  job = '';

  avatar = '';

  revenue = '';
  @Input('hired')
  isHired = false;

  protected readonly first = first;

  changePrenom() {
    if (!this.prenom) {
      return;
    }
    this.firstname = this.prenom?.nativeElement.value;
  }

  onClickButton(coordX: number) {
    this.isHired = true;
    console.log('CoordX : ' + coordX);
  }

  frappeAuClavier(event: Event) {
    this.firstname = (event.target as HTMLInputElement).value;
  }

  ngAfterViewInit(): void {
    if (this.prenom) {
      this.prenom.nativeElement.value = 'Thomas';
    }
  }
}
