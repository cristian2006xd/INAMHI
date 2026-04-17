import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

// Importaciones de Angular Material
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatDividerModule } from '@angular/material/divider';

import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-dashboard-funcionario',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    MatDividerModule
  ],
  templateUrl: './dashboard-funcionario.html',
  styleUrls: ['./dashboard-funcionario.scss']
})
export class DashboardFuncionarioComponent implements OnInit {
  pazYSalvoForm!: FormGroup;
  estadoTramite: string = 'Nuevo';

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.pazYSalvoForm = this.fb.group({
      // DATOS PERSONALES
      nombres: ['', Validators.required],
      modalidadLaboral: ['', Validators.required],
      cedula: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      fechaIngreso: ['', Validators.required],
      fechaSalida: ['', Validators.required],
      direccion: ['', Validators.required],
      numeroDomicilio: [''],
      numeroCelular: ['', Validators.required],
      numeroEmergencia: ['', Validators.required],
      email1: ['', [Validators.required, Validators.email]],
      email2: ['', Validators.email],
      provincia: ['', Validators.required],
      canton: ['', Validators.required],
      
      // DATOS DE LA DIRECCIÓN/UNIDAD
      lugarTrabajo: ['', Validators.required],
      direccionUnidad: ['', Validators.required],
      cargo: ['', Validators.required],
      grupoOcupacional: ['', Validators.required]
    });
  }

  enviarTramite() {
    if (this.pazYSalvoForm.valid) {
      this.estadoTramite = 'Pendiente';
      console.log('Datos listos para la base de datos:', this.pazYSalvoForm.value);
    } else {
      this.pazYSalvoForm.markAllAsTouched(); // Muestra errores si faltan campos
    }
  }

  generarPDF() {
    const data = document.getElementById('documento-paz-y-salvo');
    if (data) {
      html2canvas(data, { scale: 2 }).then(canvas => {
        const imgWidth = 210; 
        const pageHeight = 297; 
        const imgHeight = canvas.height * imgWidth / canvas.width;
        const contentDataURL = canvas.toDataURL('image/png');
        
        const pdf = new jsPDF('p', 'mm', 'a4');
        pdf.addImage(contentDataURL, 'PNG', 0, 0, imgWidth, imgHeight);
        pdf.save('Paz_y_Salvo_INAMHI.pdf'); 
      });
    }
  }
}