import { httpResource } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

import { PackageListResponseSchema } from './dto/package-response.dto';
import { PackagesApiService } from './packages-api.service';

@Injectable({ providedIn: 'root' })
export class PackagesFacade {
  private readonly api = inject(PackagesApiService);

  readonly packages = httpResource(() => this.api.packagesUrl(), {
    parse: (data) => PackageListResponseSchema.parse(data),
  });

  reloadPackages(): void {
    this.packages.reload();
  }
}
