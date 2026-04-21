import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Necesario para directivas básicas
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms'; // Vital para [formGroup]

@Component({
  selector: 'app-paz-y-salvo',
  standalone: true, // <--- CRÍTICO: Indica que es un componente independiente
  imports: [
    CommonModule, 
    ReactiveFormsModule, // <--- ESTO QUITA LA LÍNEA ROJA DEL HTML
    FormsModule
  ],
  templateUrl: './seguridad-informacion.html',
  styleUrls: ['./seguridad-informacion.scss']
})
export class PazYSalvoComponent implements OnInit {
  formSeguridad!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formSeguridad = this.fb.group({
      archivosDigitales: [null, Validators.required],
      informeActividades: [null, Validators.required],
      archivosFisicos: [null, Validators.required],
      verificacionInfo: [null, Validators.required],
      oficialSeguridad: ['', [Validators.required, Validators.minLength(5)]],
      nombreResponsable: ['', Validators.required]
    });
  }

  toggleCheck(controlName: string, value: boolean) {
    const control = this.formSeguridad.get(controlName);
    if (control) {
      if (control.value === value) {
        control.setValue(null);
      } else {
        control.setValue(value);
      }
    }
  }

  enviarFormulario() {
    if (this.formSeguridad.valid) {
      console.log('Datos listos para enviar:', this.formSeguridad.value);
      alert('Formulario validado con éxito');
    } else {
      this.formSeguridad.markAllAsTouched(); 
      alert('Error: Por favor completa todas las validaciones en la tabla.');
    }
  }
}