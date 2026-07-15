import { Component, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
import { ButtonComponent } from '@ui/button/button.component';
import { TextInputComponent } from '@ui/text-input/text-input.component';
import { ResetIconComponent } from '../../../../assets/icons/reset-icon.component';

@Component({
  selector: 'package-page',
  standalone: true,
  templateUrl: './package-page.component.html',
  imports: [ButtonComponent, ResetIconComponent, FormField, TextInputComponent],
})
export class PackagePageComponent {
  searchModel = signal({ search: '' });
  searchForm = form(this.searchModel);
}
