import { Injectable, signal, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser = signal<any>(null);

  // Inyectamos PLATFORM_ID para que Angular nos diga si estamos en el servidor o en el navegador
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  login(email: string, role: 'funcionario' | 'director') {
    const user = { email, role };
    this.currentUser.set(user);
    
    // Solo guardamos en localStorage si estamos en el navegador
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('user_session', JSON.stringify(user));
    }
  }

  logout() {
    this.currentUser.set(null);
    
    // Solo borramos de localStorage si estamos en el navegador
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('user_session');
    }
  }

  isLoggedIn(): boolean {
    // Si ya lo tenemos en memoria, devolvemos true
    if (this.currentUser() !== null) {
      return true;
    }
    // Solo consultamos el localStorage si estamos en el navegador
    if (isPlatformBrowser(this.platformId)) {
      return !!localStorage.getItem('user_session');
    }
    return false; // Si estamos en el servidor, por defecto no está logueado
  }

  getRole(): string | null {
    if (isPlatformBrowser(this.platformId)) {
      const session = localStorage.getItem('user_session');
      return session ? JSON.parse(session).role : null;
    }
    return null;
  }
}