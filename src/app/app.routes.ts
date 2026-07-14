import { Routes } from '@angular/router';

import { AppShellComponent } from './core/layout/app-shell/app-shell.component';

export const routes: Routes = [
  {
    path: '',
    component: AppShellComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./features/packages/feature/package-page/package-page.component').then(
            (m) => m.PackagePageComponent,
          ),
      },
    ],
  },
];
