import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadComponent: () => import('./features/login/login').then(m => m.Login)
  },
  {
    path: 'datos-personales',
    loadComponent: () => import('./features/dashboard-funcionario/dashboard-funcionario').then(m => m.DatosPersonales)
  },
  {
    path: 'gestion-tecnologias',
    loadComponent: () => import('./features/gestion-tecnologias/gestion-tecnologias').then(m => m.GestionTecnologiasComponent)
  },
  {
    path: 'gestion-financiera',
    loadComponent: () => import('./features/gestion-financiera/gestion-financiera').then(m => m.GestionFinanciera)
  },
  {
    path: 'seguridad-informacion',
    loadComponent: () => import('./features/seguridad-informacion/seguridad-informacion').then(m => m.SeguridadInformacion)
  },
  {
    path: 'recursos-humanos',
    loadComponent: () => import('./features/recursos-humanos/recursos-humanos').then(m => m.RecursosHumanos)
  },
  {
    path: 'recepcion-documentos',
    loadComponent: () => import('./features/recepcion-documentos/recepcion-documentos').then(m => m.RecepcionDocumentos)
  },
  {
    path: 'datos-direccion',
    loadComponent: () => import('./features/datos-direccion/datos-direccion').then(m => m.DatosDireccion)
  },
  {
  path: 'direccion-financiera',
  loadComponent: () => import('./features/direccion-financiera/direccion-financiera').then(m => m.DireccionFinanciera)
 },
   {
    path: '**',
    redirectTo: 'login' // Si escriben cualquier cosa mal, al login
  }
];