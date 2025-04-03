import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { Product } from '../product.model';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-review',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent {
  private form = inject(FormBuilder);
  @Input() data: Product = {
    category: '',
    description: '',
    id: 0,
    image: '',
    price: 0,
    title: '',
    rating: {
      rate: 0,
      count: 0
    }
  };
  @Output() emitReview = new EventEmitter();
  @Output() closeDialog = new EventEmitter();
  errorMsg = 'Reviews field is required!';
  showError = false;
  reviewForm: FormGroup = this.form.group({
    name: ['anonymous'],
    reviews: ['', Validators.required]
  })

  postReview(id: number) {
    const item = {
      id: id,

      formValues: {
        review: this.reviewForm.value,
        uniqueId: uuidv4(),
        productId: id

      }
    }
    if (this.reviewForm.valid) {
      this.emitReview.emit(item);
      this.showError = false;
    } else {
      this.showError = true;
    }

  }
  closeReview() {
    this.closeDialog.emit();
    this.showError = false;
  }

}
