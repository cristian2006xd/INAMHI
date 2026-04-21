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
    loadComponent: () => import('./features/dashboard-funcionario/dashboard-funcionario').then(m => m.DatosPersonalesComponent)
  },
  {
    path: 'gestion-tecnologias',
    loadComponent: () => import('./features/gestion-tecnologias/gestion-tecnologias').then(m => m.GestionTecnologiasComponent)
  },
  {
    path: 'gestion-financiera',
    loadComponent: () => import('./features/gestion-financiera/gestion-financiera').then(m => m.GestionFinancieraComponent)
  },
  {
    path: 'seguridad-informacion',
    loadComponent: () => import('./features/seguridad-informacion/seguridad-informacion').then(m => m.PazYSalvoComponent)
  },
  {
    path: 'recursos-humanos',
    loadComponent: () => import('./features/recursos-humanos/recursos-humanos').then(m => m.RecursosHumanosComponent)
  },
  {
    path: 'recepcion-documentos',
    loadComponent: () => import('./features/recepcion-documentos/recepcion-documentos').then(m => m.RecepcionDocumentosComponent)
  },
  {
    path: 'datos-direccion',
    loadComponent: () => import('./features/datos-direccion/datos-direccion').then(m => m.DatosDireccionComponent)
  },
  {
    path: 'direccion-financiera',
    loadComponent: () => import('./features/direccion-financiera/direccion-financiera').then(m => m.DireccionFinancieraComponent)
  },
  {
    path: '**',
    redirectTo: 'login' // Si escriben cualquier cosa mal, al login
  }
];