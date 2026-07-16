import { Component, Input, model } from '@angular/core';
import { FormValueControl } from '@angular/forms/signals';
import { input, InputVariant } from './text-input.cva';
// https://angular.dev/guide/forms/signals/custom-controls#minimal-input-control
@Component({
  selector: 'app-text-input',
  standalone: true,
  templateUrl: './text-input.component.html',
})
export class TextInputComponent implements FormValueControl<string> {
  @Input() placeholder = '';
  @Input() class = '';
  @Input() className = '';
  @Input() variant: InputVariant = 'primary';

  value = model('');

  onInput(event: Event): void {
    this.value.set((event.target as HTMLInputElement).value);
  }

  get classes(): string {
    return input({ variant: this.variant, class: this.className });
  }
}
