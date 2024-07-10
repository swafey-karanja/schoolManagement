import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SchoolsPageComponent } from './schools-page/schools-page.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'schools',
    component: SchoolsPageComponent
  },
  { path: '',   redirectTo: '', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: DashboardComponent },
];
