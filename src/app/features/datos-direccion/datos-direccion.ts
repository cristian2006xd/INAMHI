import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-direccion-unidad',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './datos-direccion.html',
})
export class DatosDireccionComponent implements OnInit {
  unidadForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.unidadForm = this.fb.group({
      // Lugar de Trabajo
      plantaCentral: [false],
      procesosDesconcentrados: [false],
      detalleLugar: [''],
      
      // Información General
      direccionUnidad: ['', Validators.required],
      cargoGrupo: ['', Validators.required],

      // Gestión (Checkboxes SI/NO)
      entregaInforme: [null, Validators.required],
      entregaQuipux: [null, Validators.required],
      fePresentacion: [null, Validators.required],
      clavesAcceso: [null, Validators.required],
      entregaArchivo: [null, Validators.required],
      actaClaves: [null, Validators.required],
      esAdministrador: [null, Validators.required],

      // Detalles Finales
      responsableFirma: ['', Validators.required],
      observaciones: [''],
      descripcionContrato: [''],
      servidorRecibe: [''],
      jefeInmediato: ['', Validators.required]
    });
  }

  // Método corregido con validación de seguridad (Safe Navigation)
  toggleCheck(controlName: string, value: any) {
    const control = this.unidadForm.get(controlName);
    if (control) {
      // Si el valor actual es igual al que enviamos, desmarcamos (ponemos null)
      if (control.value === value) {
        control.setValue(null);
      } else {
        control.setValue(value);
      }
    }
  }

  guardarDireccion() {
    if (this.unidadForm.valid) {
      console.log('Datos de la Dirección:', this.unidadForm.value);
      alert('Sección de Dirección/Unidad guardada con éxito.');
    } else {
      this.unidadForm.markAllAsTouched();
      alert('Existen campos obligatorios sin completar en esta sección.');
    }
  }
}