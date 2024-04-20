import { Routes } from '@angular/router';
import { CreateBudgetPageComponent } from './pages/create-budget-page/create-budget-page.component';
import { View3Component } from './pages/view3/view3.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: 'view3', component: View3Component },
  {
    path: 'create-budget',
    component: CreateBudgetPageComponent,
  },
  { path: '', component: HomeComponent },
];
