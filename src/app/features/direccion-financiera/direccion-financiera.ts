import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-direccion-financiera',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './direccion-financiera.html'
})
export class DireccionFinancieraComponent implements OnInit, AfterViewInit {
  adminForm!: FormGroup;
  
  @ViewChild('canvasFirma') canvasRef!: ElementRef<HTMLCanvasElement>;
  private ctx!: CanvasRenderingContext2D;
  private isDrawing = false;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.adminForm = this.fb.group({
      administradorContrato: [null, Validators.required],
      entregaInforme: [null],
      entregaBienes: [null, Validators.required],
      numeroActa: [''],
      pendientesDeducibles: [null, Validators.required],
      valorDeducibles: [0],
      pasajesJustificar: [null, Validators.required],
      valorPasajes: [0],
      nombreResponsable: ['', Validators.required]
    });
  }

  ngAfterViewInit() {
    this.prepararCanvas();
  }

  private prepararCanvas() {
    const canvas = this.canvasRef.nativeElement;
    this.ctx = canvas.getContext('2d')!;
    // Ajuste de resolución
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    // Estilo del trazo
    this.ctx.strokeStyle = '#000000';
    this.ctx.lineWidth = 2;
    this.ctx.lineCap = 'round';
  }

  // Lógica de dibujo (Mouse)
  startDrawing(event: MouseEvent) {
    this.isDrawing = true;
    this.draw(event);
  }

  draw(event: MouseEvent) {
    if (!this.isDrawing) return;
    const rect = this.canvasRef.nativeElement.getBoundingClientRect();
    this.ctx.lineTo(event.clientX - rect.left, event.clientY - rect.top);
    this.ctx.stroke();
    this.ctx.beginPath();
    this.ctx.moveTo(event.clientX - rect.left, event.clientY - rect.top);
  }

  // Lógica de dibujo (Touch para móviles)
  startDrawingTouch(event: TouchEvent) {
    event.preventDefault();
    this.isDrawing = true;
    const touch = event.touches[0];
    const rect = this.canvasRef.nativeElement.getBoundingClientRect();
    this.ctx.beginPath();
    this.ctx.moveTo(touch.clientX - rect.left, touch.clientY - rect.top);
  }

  drawTouch(event: TouchEvent) {
    event.preventDefault();
    if (!this.isDrawing) return;
    const touch = event.touches[0];
    const rect = this.canvasRef.nativeElement.getBoundingClientRect();
    this.ctx.lineTo(touch.clientX - rect.left, touch.clientY - rect.top);
    this.ctx.stroke();
  }

  stopDrawing() {
    this.isDrawing = false;
    this.ctx.beginPath();
  }

  limpiarFirma() {
    this.ctx.clearRect(0, 0, this.canvasRef.nativeElement.width, this.canvasRef.nativeElement.height);
  }

  toggleCheck(controlName: string, value: boolean) {
    this.adminForm.get(controlName)?.setValue(value);
  }

  public async imprimirTodoEnUno() {
    const element = document.getElementById('seccion-admin');
    if (element) {
      const canvas = await html2canvas(element, { scale: 2, useCORS: true });
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
      pdf.save('Paz_y_Salvo_INAMHI.pdf');
    }
  }
}