import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';

// Módulos de Material para el menú
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';


// Servicio de Autenticación
import { AuthService } from './core/services/auth';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    RouterLink,           // Para navegar sin recargar la página
    RouterLinkActive,     // Para resaltar el botón activo
    MatToolbarModule, 
    MatButtonModule, 
    MatIconModule
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent {
  authService = inject(AuthService);
  router = inject(Router);

  cerrarSesion() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}