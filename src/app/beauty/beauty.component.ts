import { Component, inject, OnInit, signal } from '@angular/core';
import { HeroComponent } from '../hero/hero.component';
import { SloganComponent } from '../slogan/slogan.component';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { ReviewComponent } from '../review/review.component';
import { Product, Review, ReviewList} from '../product.model';
import { ReviewListComponent } from '../review-list/review-list.component';

@Component({
  selector: 'app-beauty',
  imports: [
    HeroComponent,
    SloganComponent,
    ReviewComponent,
    ReviewListComponent,
    CommonModule,
  ],
  templateUrl: './beauty.component.html',
  styleUrl: './beauty.component.css'
})
export class BeautyComponent implements OnInit {
  private http = inject(ProductService);
  beautyProducts = signal<Product[]>([]);
  showReview = false;
  showAllProductReviews = false;
  showReviewListError = false;
  productId = 0;
  responseMsg = true;
  reviewList = signal<ReviewList[]>([]);
  reviewListToDisplay = signal<ReviewList[]>([]);
  message = 'Thank you for your review';
  dataFromLocalStorage = localStorage.getItem('products');

  ngOnInit(): void {
    this.http.getProduct()
      .subscribe(pro => {
        if (this.dataFromLocalStorage) {
          this.beautyProducts.set(JSON.parse(this.dataFromLocalStorage));
        } else {
          this.beautyProducts.set(pro);
        }
      })
  }

  toggleReview(id: number) {
    this.showReview = !this.showReview;
    this.productId = id;
    this.showAllProductReviews = false;
    this.responseMsg = false;
  }

  productDetails(id: number) {
    this.showAllProductReviews = true;
    this.productId = id;
    this.showReview = false;
  }

  closeReview() {
    this.showReview = false;
    this.showAllProductReviews = false;
    this.productId = 0;
  }

  postReview(res: Review) {
    this.showReview = false;
    this.responseMsg = true;
    this.productId = res.id;
    const findItem = this.beautyProducts().find((item: Product) => item.id === res.id);
    if (findItem) {
      findItem.rating.count += 1;

      // Ensure the data is updated
      const beautyProductsUp = this.beautyProducts().map((item: Product) =>
        item.id === findItem.id ? findItem : item
      );
      this.beautyProducts.set(beautyProductsUp);

      // Store updates to localStorage
      localStorage.setItem('products', JSON.stringify(this.beautyProducts()));
      this.addToReviews(res.formValues);

    } else {
      console.log('No item found');
    }
  }
  addToReviews(review: ReviewList) {

    this.reviewList.update((oldData: ReviewList[]) => [...oldData, review]);
    localStorage.setItem('productReviews', JSON.stringify(this.reviewList()));
    console.log(this.reviewList())
  }

  seeAllReviews(id: number) {
    this.reviewListToDisplay.set([]);
    this.showAllProductReviews = true;
    this.productId = id;
    this.responseMsg = false;
    const reviewFromLS = localStorage.getItem('productReviews');
    if (!reviewFromLS) {

      return
    }
    const newItem = JSON.parse(reviewFromLS)
    const filteredProduct = newItem.filter((item: ReviewList) => item.productId === id);
    if (!filteredProduct.length) {
      this.showReviewListError = true;
      return
    }
    this.showReviewListError = false;
    this.reviewListToDisplay.set(filteredProduct);
  }

}
