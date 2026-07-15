import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { ButtonComponent } from '@ui/button/button.component';
import { TypographyComponent } from '@ui/typography/typography.component';

@Component({
  selector: 'app-error-page',
  standalone: true,
  imports: [RouterLink, TypographyComponent, ButtonComponent],
  templateUrl: './error-page.component.html',
})
export class ErrorPageComponent {
  router = inject(Router);

  navigateToHome(): void {
    this.router.navigate(['/']);
  }
}
