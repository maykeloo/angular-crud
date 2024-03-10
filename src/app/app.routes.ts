import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'products',
    loadComponent: () => import('./application/pages/home/home.component').then(m => m.HomeComponent)
  }
];
