import { Component, Input } from '@angular/core';
import { button, ButtonVariant } from './button.cva';

@Component({
  selector: 'app-button',
  standalone: true,
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() variant: ButtonVariant = 'primary';
  @Input() className = '';
  @Input() class = '';

  get classes(): string {
    return button({ variant: this.variant, class: this.className });
  }
}
