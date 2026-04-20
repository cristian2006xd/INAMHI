import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Agregado para mejores prácticas
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

// RUTA CORREGIDA: Subimos dos niveles hasta llegar a core
import { FormStatusService } from '../../core/services/form-status'; 

@Component({
  selector: 'app-datos-personales',
  standalone: true,
  imports: [
    CommonModule, 
    ReactiveFormsModule
  ],
  templateUrl: './dashboard-funcionario.html',
  styleUrls: ['./dashboard-funcionario.scss'] // Asegúrate de tener este archivo o bórralo si no existe
})
export class DatosPersonales implements OnInit {
  datosPersonalesForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private formStatusService: FormStatusService
  ) {}

  ngOnInit(): void {
    // Inicialización del formulario
    this.datosPersonalesForm = this.fb.group({
      nombreCompleto: ['', Validators.required],
      cedula: ['', [Validators.required, Validators.minLength(10)]],
      telefonoFijo: [''],
      modalidad: ['', Validators.required],
      fechaIngreso: ['', Validators.required],
      celular: ['', Validators.required],
      contactoEmergencia: ['', Validators.required],
      fechaSalida: [''],
      email1: ['', [Validators.required, Validators.email]],
      email2: ['', Validators.email],
      direccion: ['', Validators.required],
      provincia: ['', Validators.required],
      canton: ['', Validators.required]
    });

    // Escuchar cambios para actualizar el color en el Navbar
    this.datosPersonalesForm.statusChanges.subscribe(status => {
      // Si el formulario es válido (verde), si no (rojo)
      this.formStatusService.actualizarEstado('personales', status === 'VALID');
    });
  }
}