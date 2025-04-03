import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { SloganComponent } from '../slogan/slogan.component';
import { CarComponent } from '../car/car.component';

@Component({
  selector: 'app-cars',
  imports: [
    HeroComponent,
    SloganComponent,
    CarComponent
  ],
  templateUrl: './cars.component.html',
  styleUrl: './cars.component.css'
})
export class CarsComponent {

}
