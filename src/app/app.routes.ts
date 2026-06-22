import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./pages/dashboard/dashboard.page').then(m => m.DashboardPage),
  },
  {
    path: 'children',
    loadComponent: () =>
      import('./pages/children/children.page').then(m => m.ChildrenPage),
  },
  {
    path: 'child-detail/:id',
    loadComponent: () =>
      import('./pages/child-detail/child-detail.page').then(m => m.ChildDetailPage),
  },
  {
    path: 'vaccines',
    loadComponent: () =>
      import('./pages/vaccines/vaccines.page').then(m => m.VaccinesPage),
  },
  {
    path: 'campaigns',
    loadComponent: () =>
      import('./pages/campaigns/campaigns.page').then(m => m.CampaignsPage),
  },
];