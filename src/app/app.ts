import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterLink, RouterLinkActive, Router } from '@angular/router';
// IMPORTANTE: Añade estos dos para que funcionen las validaciones
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

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
    // Se agregan aquí para que cualquier componente hijo o el propio root 
    // pueda usar [formGroup] y validaciones
    ReactiveFormsModule, 
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class AppComponent {
  
  constructor(
    public authService: AuthService,
    public formStatus: FormStatusService,
    private router: Router
  ) {}

  cerrarSesion() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}