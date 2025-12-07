import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'register',
    loadComponent: () => import('./register/register.page').then(m => m.RegisterPage)
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./dashboard/dashboard.page').then(m => m.DashboardPage)
  },
  {
    path: 'requests',
    loadComponent: () => import('./requests/requests.page').then(m => m.RequestsPage)
  },
  {
    path: 'pending-task',
    loadComponent: () => import('./pending-task/pending-task.page').then(m => m.PendingTaskPage)
  },
  {
    path: 'profile',
    loadComponent: () => import('./profile/profile.page').then(m => m.ProfilePage)
  },
 
  {
    path: 'scanner',
    loadComponent: () => import('./scanner/scanner.page').then(m => m.ScannerPage)
  },
];
