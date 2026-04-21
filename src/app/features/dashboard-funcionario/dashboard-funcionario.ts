import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-datos-personales',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './dashboard-funcionario.html',
})
export class DatosPersonalesComponent implements OnInit {
  datosPersonalesForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.datosPersonalesForm = this.fb.group({
      nombreCompleto: ['', [Validators.required]],
      cedula: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      telefonoFijo: [''],
      modalidad: ['permanente'], // Valor por defecto para los radio buttons
      fechaIngreso: ['', Validators.required],
      celular: ['', [Validators.required]],
      contactoEmergencia: ['', Validators.required],
      fechaSalida: ['', Validators.required],
      email1: ['', [Validators.required, Validators.email]],
      email2: ['', [Validators.email]],
      direccion: ['', Validators.required],
      provincia: ['PICHINCHA', Validators.required],
      canton: ['QUITO', Validators.required]
    });
  }

  guardarDatosPersonales() {
    if (this.datosPersonalesForm.valid) {
      console.log('Datos Personales Capturados:', this.datosPersonalesForm.value);
    } else {
      this.datosPersonalesForm.markAllAsTouched();
      alert('Por favor, complete los campos obligatorios marcados en el formulario.');
    }
  }
}