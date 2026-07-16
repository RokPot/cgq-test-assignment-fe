import { httpResource } from '@angular/common/http';
import { Component, inject, Input } from '@angular/core';

import { TypographyComponent } from '@ui/typography/typography.component';
import { DownloadIconComponent } from '../../../../../assets/icons/download-icon.component';
import { NumberShortenerPipe } from '../../../../shared/pipes/number-shortener.pipe';
import { PluralSingularPipe } from '../../../../shared/pipes/plural-singular.pipe';
import {
  PackageDependenciesResponseSchema,
  PackageResponse,
} from '../../data-access/dto/package-response.dto';
import { PackagesApiService } from '../../data-access/packages-api.service';

@Component({
  selector: 'app-package-card',
  standalone: true,
  templateUrl: './package-card.component.html',
  imports: [
    TypographyComponent,
    NumberShortenerPipe,
    DownloadIconComponent,
    PluralSingularPipe,
  ],
  host: {
    class: 'max-w-[30%] min-w-[30%] min-h-[150px] flex flex-1',
  },
})
export class PackageCardComponent {
  private readonly api = inject(PackagesApiService);

  @Input({ required: true }) package!: PackageResponse;

  readonly dependencies = httpResource(
    () => {
      return this.api.dependenciesUrl(this.package.id);
    },
    {
      parse: (data) => PackageDependenciesResponseSchema.parse(data),
    },
  );

  getScopedPackageHightlight(): string {
    const packageId = this.package.id;

    const splittedPackageId = packageId.split('/');
    console.log(splittedPackageId);
    if (splittedPackageId.length === 1) {
      return packageId;
    }

    return `<span class="text-yellow-700">${splittedPackageId[0]}/</span>${splittedPackageId[1]}`;
  }
}
