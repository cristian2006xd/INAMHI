import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormStatusService } from '../../core/services/form-status';

@Component({
  selector: 'app-gestion-tecnologias',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './gestion-tecnologias.html'
})
export class GestionTecnologiasComponent implements OnInit {
  ticForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private formStatusService: FormStatusService
  ) {}

  ngOnInit(): void {
    this.ticForm = this.fb.group({
      verificacionEquipo: [false],
      observacionEquipo: [''],
      accesoIp: [false],
      liberacionIp: [false],
      retiroContrasenas: [false],
      entregaBackup: [false],
      cierreCuentas: [false],
      correoInstitucional: [false],
      quipux: [false],
      esigef: [false],
      responsableNombre: [''],
      tarjetaAcceso: [false]
    });

    // Notificar al Navbar si esta sección está lista
    this.ticForm.statusChanges.subscribe(status => {
      this.formStatusService.actualizarEstado('tic', status === 'VALID');
    });
  }
}