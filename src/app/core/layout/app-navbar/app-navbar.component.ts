import { Component } from '@angular/core';
import { TypographyComponent } from '@ui/typography/typography.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [TypographyComponent],
  templateUrl: './app-navbar.component.html',
  host: {
    class: 'w-full',
  },
})
export class AppNavbarComponent {}
