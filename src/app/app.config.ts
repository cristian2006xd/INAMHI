import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

// 1. Importas las herramientas para hacer peticiones HTTP con 'fetch'
import { provideHttpClient, withFetch } from '@angular/common/http'; 

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(),
    // 2. Lo agregas aquí en tus proveedores
    provideHttpClient(withFetch()) 
  ]
};