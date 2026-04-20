import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';

// Angular Material
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

// TUS SERVICIOS
import { AuthService } from './core/services/auth';
import { FormStatusService } from './core/services/form-status'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent {
  // CRÍTICO: Inyecta 'formStatus' como public para que el HTML lo reconozca
  constructor(
    public authService: AuthService,
    public formStatus: FormStatusService, // <--- ESTO BORRA EL ERROR EN APP.HTML
    private router: Router
  ) {}

  cerrarSesion() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}