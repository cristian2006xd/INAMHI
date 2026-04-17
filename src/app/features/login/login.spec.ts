import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Login } from './login';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';

describe('LoginComponent', () => {
  let component: Login;
  let fixture: ComponentFixture<Login>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        Login, // Al ser Standalone, se importa directamente
        ReactiveFormsModule,
        BrowserAnimationsModule // Obligatorio para que Angular Material no falle en pruebas
      ],
      providers: [
        provideRouter([]) // Simulamos el enrutador para evitar errores
      ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Login);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería inicializar el formulario vacío y como inválido', () => {
    expect(component.loginForm).toBeDefined();
    expect(component.loginForm.valid).toBeFalsy();
    
    const correoControl = component.loginForm.get('correo');
    const passwordControl = component.loginForm.get('password');
    
    expect(correoControl?.value).toBe('');
    expect(passwordControl?.value).toBe('');
  });

  it('debería marcar el formulario como válido si se llenan correctamente los campos', () => {
    const correoControl = component.loginForm.get('correo');
    const passwordControl = component.loginForm.get('password');

    correoControl?.setValue('test@inamhi.gob.ec');
    passwordControl?.setValue('123456');

    expect(component.loginForm.valid).toBeTruthy();
  });
});