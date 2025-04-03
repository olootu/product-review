import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ReviewList } from '../product.model';
import { ReviewListItemComponent } from '../review-list-item/review-list-item.component';

@Component({
  selector: 'app-review-list',
  imports: [
    ReviewListItemComponent
  ],
  templateUrl: './review-list.component.html',
  styleUrl: './review-list.component.css'
})
export class ReviewListComponent {
  @Input() data: ReviewList[] = [];
  @Output() closeDialog = new EventEmitter();

  closeReview() {
    this.closeDialog.emit();
  }

}
