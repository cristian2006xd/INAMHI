import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-tic-paz-salvo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './gestion-tecnologias.html',
  styleUrls: ['./gestion-tecnologias.scss']
})
export class GestionTecnologiasComponent implements OnInit {
  ticForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.ticForm = this.fb.group({
      // Checkboxes principales (Booleanos)
      verificacionEquipo: [null, Validators.required],
      accesoIp: [null, Validators.required],
      liberacionIp: [null, Validators.required],
      retiroContrasenas: [null, Validators.required],
      entregaBackup: [null, Validators.required],
      cierreCuentas: [null, Validators.required],
      correoInstitucional: [null, Validators.required],
      quipux: [null, Validators.required],
      esigef: [null, Validators.required],
      tarjetaAcceso: [null, Validators.required],
      
      // Campos de texto
      observacionEquipo: [''],
      responsableNombre: ['', Validators.required]
    });
  }

  // Método para manejar la lógica de SI/NO con checkboxes
  toggleTic(controlName: string, value: boolean) {
    const control = this.ticForm.get(controlName);
    if (control) {
      // Si hace click en el mismo que ya está activo, lo pone en null (desmarcado)
      const newValue = control.value === value ? null : value;
      control.setValue(newValue);
    }
  }

  validarTic() {
    if (this.ticForm.valid) {
      console.log('Formulario TIC válido:', this.ticForm.value);
      alert('Sección TIC validada con éxito.');
    } else {
      this.ticForm.markAllAsTouched();
      alert('Error: Asegúrate de marcar todas las verificaciones de TIC.');
    }
  }
}