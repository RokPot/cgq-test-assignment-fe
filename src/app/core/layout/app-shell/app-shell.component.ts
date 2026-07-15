import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavbarComponent } from '../app-navbar/app-navbar.component';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [RouterOutlet, AppNavbarComponent],
  templateUrl: './app-shell.component.html',
})
export class AppShellComponent {}
