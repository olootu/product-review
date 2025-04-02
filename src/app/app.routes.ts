import { Routes } from '@angular/router';
import { BeautyComponent } from './beauty/beauty.component';
import { CarsComponent } from './cars/cars.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'beauty', component: BeautyComponent},
  {path: 'cars', component: CarsComponent},
  {path: 'contact', component: ContactComponent}
];
