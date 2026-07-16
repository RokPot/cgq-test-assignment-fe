import { Component, computed, debounced, inject, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { ButtonComponent } from '@ui/button/button.component';
import { TextInputComponent } from '@ui/text-input/text-input.component';
import { TypographyComponent } from '@ui/typography/typography.component';
import { ResetIconComponent } from '../../../../assets/icons/reset-icon.component';
import { PackagesFacade } from '../data-access/packages.facade';
import { PackageCardComponent } from '../ui/package-card/package-card.component';

@Component({
  selector: 'package-page',
  standalone: true,
  templateUrl: './package-page.component.html',
  imports: [
    ButtonComponent,
    ResetIconComponent,
    FormField,
    TextInputComponent,
    PackageCardComponent,
    TypographyComponent,
  ],
})
export class PackagePageComponent {
  readonly packagesFacade = inject(PackagesFacade);

  readonly searchModel = signal({ search: '' });
  readonly searchForm = form(this.searchModel);

  readonly debouncedSearch = debounced(() => this.searchModel().search, 500);

  readonly filteredPackages = computed(() => {
    const packages = this.packagesFacade.packages.value() || [];

    const debouncedTrimmedValue = this.debouncedSearch.value()?.trim();
    if (!debouncedTrimmedValue) {
      return packages;
    }

    return packages.filter((filterPackage) =>
      filterPackage.id
        .toLowerCase()
        .includes(debouncedTrimmedValue.toLowerCase()),
    );
  });

  onReset(): void {
    this.searchForm().reset({ search: '' });
    this.packagesFacade.reloadPackages();
  }
}
