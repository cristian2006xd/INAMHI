import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-recepcion-documentos',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './recepcion-documentos.html',
  styleUrls: ['./recepcion-documentos.scss']
})
export class RecepcionDocumentosComponent implements OnInit {
  formRecepcion!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.formRecepcion = this.fb.group({
      fechaEntrega: ['', Validators.required],
      hojasRecibidas: [0, [Validators.required, Validators.min(1)]],
      nombreReceptor: ['', [Validators.required, Validators.minLength(3)]],
      cargoReceptor: ['', Validators.required]
    });
  }

  guardarRecepcion() {
    if (this.formRecepcion.valid) {
      console.log('Recepción registrada:', this.formRecepcion.value);
      alert('Recepción de documentos validada correctamente.');
    } else {
      this.formRecepcion.markAllAsTouched();
      alert('Por favor, complete los datos de recepción.');
    }
  }
}