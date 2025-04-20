import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slogan',
  imports: [],
  templateUrl: './slogan.component.html'
})
export class SloganComponent {
  @Input() title?: string = 'We are Reviewers!';
  @Input() sloganText?: string = 'Helping improvements';

}
