import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class ErrorService {
  private readonly router = inject(Router);

  handle(error: unknown): void {
    console.error(error);

    if (this.router.url.startsWith('/error')) {
      return;
    }

    void this.router.navigateByUrl('/error');
  }
}
