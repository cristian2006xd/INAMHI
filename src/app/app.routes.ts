import { Routes } from "@angular/router";
import { DashboardFuncionarioComponent } from "./features/dashboard-funcionario/dashboard-funcionario";
import { Login } from "./features/login/login";
import { authGuard } from "./core/guards/auth-guard";
import { DashboardDirectorComponent } from "./features/dashboard-director/dashboard-director";
import { EstacionesComponent } from "./features/estaciones/estaciones";
import { HistorialComponent } from "./features/historial/historial";

export const routes: Routes = [
  { path: 'login', component: Login },
  { 
    path: 'funcionario', 
    component: DashboardFuncionarioComponent, 
    canActivate: [authGuard] // Protegida
  },
  { 
    path: 'director', 
    component: DashboardDirectorComponent, 
    canActivate: [authGuard] // Protegida
  },
  { 
    path: 'estaciones', 
    component: EstacionesComponent, 
    canActivate: [authGuard] 
  },
  { 
    path: 'historial', 
    component: HistorialComponent, 
    canActivate: [authGuard] 
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' }
];