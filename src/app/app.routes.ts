import { Routes } from '@angular/router';

export const APP_ROUTES: Routes  = [
  {path: '', loadChildren: './pages/homepage/homepage.module.ts#HomepageModule' }
];


