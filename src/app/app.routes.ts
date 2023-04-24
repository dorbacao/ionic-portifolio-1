import { Routes, CanLoad } from '@angular/router';
import { AuthGuardService  } from './authentication.service';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },  
  {
    path: 'home',    
    loadComponent: () => import('./home/home.page').then( m => m.HomePage),
    canLoad:[AuthGuardService]
  },
  {
    path: 'informe-seus-dados',
    loadComponent: () => import('./informe-seus-dados/informe-seus-dados.page').then( m => m.InformeSeusDadosPage),
    canLoad:[AuthGuardService]
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage),
    canLoad:[AuthGuardService]
  },
  {
    path: 'badge',
    loadComponent: () => import('./badge/badge.page').then( m => m.BadgePage)
  }
];


