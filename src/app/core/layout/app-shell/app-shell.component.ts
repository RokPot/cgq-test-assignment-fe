import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from '@ui/button/button.component';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [RouterOutlet, ButtonComponent],
  templateUrl: './app-shell.component.html',
})
export class AppShellComponent {}
