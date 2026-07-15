import { Routes } from '@angular/router';

import { ErrorPageComponent } from './core/error-handling/error-page/error-page.component';
import { AppShellComponent } from './core/layout/app-shell/app-shell.component';

export const routes: Routes = [
  {
    path: 'error',
    component: ErrorPageComponent,
  },
  {
    path: '',
    component: AppShellComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/packages/package-page/package-page.component').then(
            (m) => m.PackagePageComponent,
          ),
      },
    ],
  },
];
