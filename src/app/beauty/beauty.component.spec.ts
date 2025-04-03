import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeautyComponent } from './beauty.component';
import { ProductService } from '../product.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

describe('BeautyComponent', () => {
  let component: BeautyComponent;
  let fixture: ComponentFixture<BeautyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BeautyComponent],
      providers:[ProductService,  provideHttpClient(),
        provideHttpClientTesting() ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeautyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
