import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.component.html'
})
export class HeroComponent {
  @Input() image = '';
  @Input() alt? = 'Hero image';

}
