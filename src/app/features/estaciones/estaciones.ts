import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

export interface EstacionMeteorologica {
  codigo: string;
  nombre: string;
  provincia: string;
  estado: string;
}

const DATOS_ESTACIONES: EstacionMeteorologica[] = [
  {codigo: 'M001', nombre: 'Quito - Iñaquito', provincia: 'Pichincha', estado: 'Operativa'},
  {codigo: 'M002', nombre: 'Guayaquil - Aeropuerto', provincia: 'Guayas', estado: 'Mantenimiento'},
  {codigo: 'M003', nombre: 'Cuenca - U. de Cuenca', provincia: 'Azuay', estado: 'Operativa'}
];

@Component({
  selector: 'app-estaciones',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatTableModule, MatIconModule, MatButtonModule],
  templateUrl: './estaciones.html',
  styleUrls: ['./estaciones.scss']
})
export class EstacionesComponent {
  columnasAMostrar: string[] = ['codigo', 'nombre', 'provincia', 'estado', 'acciones'];
  dataSource = DATOS_ESTACIONES;
}