import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-gestion-financiera',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './gestion-financiera.html',
})
export class GestionFinancieraComponent implements OnInit {
  financeForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.financeForm = this.fb.group({
      // Filas de la tabla (Booleanos para SI/NO y números para valores)
      saldosContables: [null, Validators.required],
      saldosContablesValor: [0, [Validators.required, Validators.min(0)]],
      saldosContablesObs: [''],

      anticipoSueldos: [null, Validators.required],
      anticipoSueldosValor: [0, [Validators.required, Validators.min(0)]],
      anticipoSueldosObs: [''],

      recuperacionValores: [null, Validators.required],
      recuperacionValoresValor: [0, [Validators.required, Validators.min(0)]],
      recuperacionValoresObs: [''],

      devolucionMuebles: [null, Validators.required],
      devolucionMueblesValor: [0, [Validators.required, Validators.min(0)]],
      devolucionMueblesObs: [''],

      // Responsables
      nombreResponsable: ['', Validators.required],
      nombreDirector: ['', Validators.required]
    });
  }

  toggleCheck(controlName: string, value: boolean) {
  const control = this.financeForm.get(controlName);
  
  // Agregamos esta validación para evitar el error de "Object is possibly null"
  if (control) {
    if (control.value === value) {
      control.setValue(null);
    } else {
      control.setValue(value);
    }
  }
}

  guardarFinanciero() {
    if (this.financeForm.valid) {
      console.log('Datos Financieros:', this.financeForm.value);
      alert('Sección financiera validada correctamente.');
    } else {
      this.financeForm.markAllAsTouched();
      alert('Por favor, complete todos los campos obligatorios de la sección financiera.');
    }
  }
}