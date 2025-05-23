import { Component} from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { SloganComponent } from '../slogan/slogan.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    HeroComponent,
    SloganComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private readonly route: Router) { }

  navigateToPage(navigation: string) {
    this.route.navigate([`/${navigation}`]);
  }

}
