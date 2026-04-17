import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

// Módulos de Angular Material necesarios
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';

export interface LogHistorial {
  id: string;
  fecha: string;
  accion: string;
  usuario: string;
  estado: 'Completado' | 'Pendiente' | 'Rechazado';
}

const DATOS_HISTORIAL: LogHistorial[] = [
  { id: 'H001', fecha: '2026-04-10 14:30', accion: 'Creación de Solicitud Paz y Salvo', usuario: 'Oliver Velasque', estado: 'Completado' },
  { id: 'H002', fecha: '2026-04-12 09:15', accion: 'Aprobación de Dirección TIC', usuario: 'Ing. Verónica Zapata', estado: 'Completado' },
  { id: 'H003', fecha: '2026-04-13 11:00', accion: 'Revisión RRHH', usuario: 'Admin Sistema', estado: 'Pendiente' },
  { id: 'H004', fecha: '2026-04-14 16:45', accion: 'Actualización de Inventario Estaciones', usuario: 'Paul Antamba', estado: 'Completado' }
];

@Component({
  selector: 'app-historial',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    MatIconModule,
    MatChipsModule,
    MatButtonModule
  ],
  templateUrl: './historial.html',
  styleUrls: ['./historial.scss']
})
export class HistorialComponent {
  columnasMostradas: string[] = ['fecha', 'accion', 'usuario', 'estado', 'ver'];
  dataSource = DATOS_HISTORIAL;

  verDetalle(id: string) {
    console.log('Abriendo detalles del registro:', id);
    // Aquí podrías abrir un modal o navegar a otra vista
  }
}