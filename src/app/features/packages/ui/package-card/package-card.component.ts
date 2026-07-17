import { httpResource } from '@angular/common/http';
import {
  Component,
  EventEmitter,
  inject,
  Input,
  Output,
  signal,
} from '@angular/core';

import { CommonModule } from '@angular/common';
import { TypographyComponent } from '@ui/typography/typography.component';
import { DownloadIconComponent } from '../../../../../assets/icons/download-icon.component';
import { IntersectionobserverDirective } from '../../../../shared/directives/intersection-observer.directive';
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
    CommonModule,
    IntersectionobserverDirective,
  ],
  host: {
    class: 'max-w-[30%] min-w-[30%] min-h-[150px] flex flex-1',
  },
})
export class PackageCardComponent {
  private readonly api = inject(PackagesApiService);

  @Input({ required: true }) package!: PackageResponse;
  @Input() isDependencyOfOuterPackage = false;
  @Output() hoveredPackageDependencies = new EventEmitter<string[]>();

  readonly inView = signal(false);
  readonly isHoveringOverCard = signal(false);

  readonly dependencies = httpResource(
    () => {
      if (!this.inView()) {
        return undefined;
      }

      return this.api.dependenciesUrl(this.package.id);
    },
    {
      parse: (data) => PackageDependenciesResponseSchema.parse(data),
    },
  );

  onIntersecting(): void {
    if (this.inView()) {
      return;
    }

    this.inView.set(true);
  }

  getScopedPackageHightlight(): string {
    const packageId = this.package.id;

    const splittedPackageId = packageId.split('/');

    if (splittedPackageId.length === 1) {
      return packageId;
    }

    return `<span class="text-yellow-700">${splittedPackageId[0]}/</span>${splittedPackageId[1]}`;
  }

  onMouseEnter(): void {
    this.isHoveringOverCard.set(true);
    if (!this.dependencies.hasValue()) {
      return;
    }
    this.hoveredPackageDependencies.emit(this.dependencies.value() || []);
  }

  onMouseLeave(): void {
    this.isHoveringOverCard.set(false);
    this.hoveredPackageDependencies.emit([]);
  }
}
