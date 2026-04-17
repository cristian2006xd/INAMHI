import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

export interface TramitePendiente {
  id: string;
  nombres: string;
  cargo: string;
  fechaSolicitud: string;
  estadoTIC: string;
}

const DATOS_MUESTRA: TramitePendiente[] = [
  {
    id: '001',
    nombres: 'Ana Gómez',
    cargo: 'Analista',
    fechaSolicitud: '2026-04-16',
    estadoTIC: 'Pendiente',
  },
  {
    id: '002',
    nombres: 'Carlos Ruiz',
    cargo: 'Técnico',
    fechaSolicitud: '2026-04-15',
    estadoTIC: 'Aprobado',
  },
];

@Component({
  selector: 'app-dashboard-director',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './dashboard-director.html',
  styleUrls: ['./dashboard-director.scss'],
})
export class DashboardDirectorComponent {
  columnasMostradas: string[] = ['nombres', 'cargo', 'fecha', 'estado', 'acciones'];
  dataSource = DATOS_MUESTRA;

  aprobarTramite(id: string) {
    console.log(`Aprobando trámite ${id}...`);
    // Lógica para actualizar la BD
  }
}
