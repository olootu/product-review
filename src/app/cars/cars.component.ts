import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { SloganComponent } from '../slogan/slogan.component';

@Component({
  selector: 'app-cars',
  imports: [
    HeroComponent,
    SloganComponent
  ],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {

}
