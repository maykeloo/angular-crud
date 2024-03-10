import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'products',
    loadComponent: () => import('./application/pages/products/products.component').then(m => m.ProductsComponent),
  }, {
    path: 'products/create',
    loadComponent: () => import('./application/pages/products/create/create.component').then(m => m.CreateComponent)
  }
];
