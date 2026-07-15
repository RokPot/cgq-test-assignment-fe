import { Component, Input } from '@angular/core';
import { typography, TypographyTag, TypographyVariant } from './typography.cva';

@Component({
  selector: 'app-typography',
  standalone: true,
  templateUrl: './typography.component.html',
})
export class TypographyComponent {
  @Input() renderAs: TypographyTag = 'p';
  @Input() variant: TypographyVariant = 'body-1';
  @Input() class = '';
  @Input() className = '';

  get classes(): string {
    return typography({ variant: this.variant, class: this.className });
  }
}
