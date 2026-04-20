import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

// Módulos de Angular Material
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthService } from '../../core/services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule
  ],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login implements OnInit {
  loginForm!: FormGroup;
  ocultarPassword = true;

  constructor(
    private fb: FormBuilder, 
    private router: Router,
    // Corregido: usa minúscula para la instancia 'authService'
    private authService: AuthService 
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      correo: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  iniciarSesion() {
    if (this.loginForm.valid) {
      const { correo } = this.loginForm.value;
      
      console.log('Intentando iniciar sesión...');

      // 1. Ejecutamos el login en el servicio
      this.authService.login(correo, 'funcionario');
      
      // 2. CORRECCIÓN CLAVE: Navegar a una ruta existente
      // Cambiamos '/funcionario' por '/datos-personales' o '/dashboard'
      this.router.navigate(['/datos-personales']).then(nav => {
        if(nav) {
          console.log('Navegación exitosa');
        } else {
          console.error('Fallo en la navegación. Verifica que /datos-personales existe en app.routes.ts');
        }
      });

    } else {
      console.warn('El formulario no es válido');
      this.loginForm.markAllAsTouched();
    }
  }
}