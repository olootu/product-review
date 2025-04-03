import { Component, Input } from '@angular/core';
import { ReviewList } from '../product.model';

@Component({
  selector: 'app-review-list-item',
  imports: [],
  templateUrl: './review-list-item.component.html',
  styleUrl: './review-list-item.component.css'
})
export class ReviewListItemComponent {
  @Input() eachReview: ReviewList = {
    uniqueId: '',
    productId: 0,
    review: {
      name: '',
      reviews: ''
    }
  };

}
