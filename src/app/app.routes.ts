import { Routes } from '@angular/router';
import { View3Component } from './pages/view3/view3.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: 'view3', component: View3Component },
  { path: '', component: HomeComponent },
];
