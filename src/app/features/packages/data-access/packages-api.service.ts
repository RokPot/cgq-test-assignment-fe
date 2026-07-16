import { Injectable } from '@angular/core';

import { environment } from '../../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class PackagesApiService {
  packagesUrl(): string {
    return `${environment.apiBaseUrl}/packages`;
  }

  dependenciesUrl(id: string): string {
    return `${environment.apiBaseUrl}/packages/${encodeURIComponent(id)}/dependencies`;
  }
}
