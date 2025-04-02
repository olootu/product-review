import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { SloganComponent } from '../slogan/slogan.component';

@Component({
  selector: 'app-contact',
  imports: [
    HeroComponent,
    SloganComponent
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

}
