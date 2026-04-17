import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth';

export const authGuard: CanActivateFn = (route, state) => {
  // 1. Cambiamos la 'A' mayúscula por 'a' minúscula en la variable
  const authService = inject(AuthService); 
  const router = inject(Router);

  // 2. Usamos la variable con minúscula aquí también
  if (authService.isLoggedIn()) { 
    return true; // Adelante, puede pasar
  } else {
    // Si no está logueado, lo mandamos al login
    router.navigate(['/login']);
    return false;
  }
};