import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

// Importación compatible con Angular 17+
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-gestion-administrativa',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './direccion-financiera.html',
})
export class DireccionFinancieraComponent implements OnInit {
  adminForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.adminForm = this.fb.group({
      administradorContrato: [null, Validators.required],
      entregaInforme: [null], 
      entregaBienes: [null, Validators.required],
      numeroActa: [''],
      pendientesDeducibles: [null, Validators.required],
      valorDeducibles: [0, [Validators.min(0)]],
      pasajesJustificar: [null, Validators.required],
      valorPasajes: [0, [Validators.min(0)]],
      nombreResponsable: ['', Validators.required]
    });
  }

  toggleCheck(controlName: string, value: boolean) {
    const control = this.adminForm.get(controlName);
    if (control) {
      control.setValue(control.value === value ? null : value);
    }
  }

  // --- MÉTODO DE IMPRESIÓN REFORZADO ---
  public imprimirPDF() {
    console.log('Intentando generar PDF...');
    
    // Capturamos el elemento por ID
    const data = document.getElementById('contenedor-paz-salvo'); 
    
    if (!data) {
      alert('¡Error! No se encontró el contenedor con id "contenedor-paz-salvo". Revisa tu HTML.');
      return;
    }

    alert('Iniciando captura de pantalla... por favor espera un segundo.');

    html2canvas(data, { 
      scale: 3, // Aumentamos a 3 para que se vea súper nítido
      useCORS: true,
      backgroundColor: '#f4f7f6',
      scrollY: -window.scrollY // Corrige problemas de posición si hay scroll
    }).then(canvas => {
      alert('Imagen capturada, generando archivo PDF...');

      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      
      const imgWidth = 210; 
      const pageHeight = 297; 
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      // Añadimos la imagen al PDF
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      
      // Descarga el archivo
      pdf.save('Paz_y_Salvo_Administrativo.pdf');
      
      alert('¡PDF descargado con éxito!');
    }).catch(err => {
      console.error('Error al generar PDF:', err);
      alert('Ocurrió un error técnico: ' + err.message);
    });
  }

  guardarAdministrativo() {
    if (this.adminForm.valid) {
      console.log('Datos:', this.adminForm.value);
      alert('Datos guardados correctamente.');
    } else {
      this.adminForm.markAllAsTouched();
      alert('Por favor, complete los campos obligatorios.');
    }
  }
}