import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

// Definimos la interfaz con las 8 secciones + dashboard
export interface FormState {
  dashboard: boolean;
  personales: boolean;
  tic: boolean;
  financiero: boolean;
  seguridad: boolean;
  rrhh: boolean;
  recepcion: boolean;
  direccion: boolean;
  dirFinanciera: boolean; // El octavo botón que añadimos
}

@Injectable({ providedIn: 'root' })
export class FormStatusService {
  // Estado inicial: Dashboard en true, el resto en false (Rojo)
  private seccionesStatus = new BehaviorSubject<FormState>({
    dashboard: true,
    personales: false,
    tic: false,
    financiero: false,
    seguridad: false,
    rrhh: false,
    recepcion: false,
    direccion: false,
    dirFinanciera: false
  });

  // Observable para el Navbar
  status$ = this.seccionesStatus.asObservable();

  constructor() {}

  /**
   * Actualiza el estado de una sección
   * @param seccion El nombre de la sección (ej: 'tic')
   * @param estaCompleto boolean (true = verde, false = rojo)
   */
  actualizarEstado(seccion: keyof FormState, estaCompleto: boolean) {
    const estadoActual = this.seccionesStatus.value;
    this.seccionesStatus.next({
      ...estadoActual,
      [seccion]: estaCompleto
    });
  }

  // Método opcional por si necesitas resetear todo el formulario
  resetearEstados() {
    this.seccionesStatus.next({
      dashboard: true,
      personales: false,
      tic: false,
      financiero: false,
      seguridad: false,
      rrhh: false,
      recepcion: false,
      direccion: false,
      dirFinanciera: false
    });
  }
}