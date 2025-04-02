import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slogan',
  imports: [],
  templateUrl: './slogan.component.html',
  styleUrl: './slogan.component.css'
})
export class SloganComponent {
  @Input() title?: string = 'We are Reviewers!';
  @Input() sloganText?: string = 'Helping improvements';

}
