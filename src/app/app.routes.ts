import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./Home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'about',
    loadComponent: () =>
    import('./About/about.page').then((m) => m.AboutPage),
  },
  {
    path: 'services',
    loadComponent: () =>
    import('./Servicios/servicios.page').then((m) => m.ServiciosPage),
  },
];
