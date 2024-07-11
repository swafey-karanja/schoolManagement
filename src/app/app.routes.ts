import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SchoolsPageComponent } from './schools-page/schools-page.component';
import { DetailspageComponent } from './detailspage/detailspage.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'schools',
    component: SchoolsPageComponent,
    children:[

    ]
  },
  {
    path: 'schools/details',
    title: 'School details',
    component:DetailspageComponent
  },
  { path: '',   redirectTo: '', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: DashboardComponent },
];
