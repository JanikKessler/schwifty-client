import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {path:'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
  {path:'**', redirectTo:'/home'}
];
