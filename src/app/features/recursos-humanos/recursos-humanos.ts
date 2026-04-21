import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-recursos-humanos',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './recursos-humanos.html',
  styleUrls: ['./recursos-humanos.scss']
})
export class RecursosHumanosComponent implements OnInit {
  formRRHH!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formRRHH = this.fb.group({
      // Validaciones SI/NO (Booleanas)
      capacitacion: [null, Validators.required],
      evaluacion: [null, Validators.required],
      viajes: [null, Validators.required],
      siith: [null, Validators.required],
      credencial: [null, Validators.required],
      copiaCd: [null, Validators.required],
      ropaTrabajo: [null, Validators.required],
      
      // Campos de texto y número
      diasVacaciones: [0, [Validators.required, Validators.min(0)]],
      nroCertificado: ['', Validators.required],
      observaciones: [''],
      nombreResponsable: ['', Validators.required],
      directorRRHH: ['', Validators.required]
    });
  }

  // Método para manejar checkboxes excluyentes
  toggle(controlName: string, value: boolean) {
    const control = this.formRRHH.get(controlName);
    if (control) {
      control.setValue(control.value === value ? null : value);
    }
  }

  validarFormulario() {
    if (this.formRRHH.valid) {
      console.log('Formulario válido:', this.formRRHH.value);
    } else {
      this.formRRHH.markAllAsTouched();
      alert('Faltan campos por completar en el formulario de Recursos Humanos.');
    }
  }
}