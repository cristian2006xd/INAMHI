import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosDireccion } from './datos-direccion';

describe('DatosDireccion', () => {
  let component: DatosDireccion;
  let fixture: ComponentFixture<DatosDireccion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatosDireccion],
    }).compileComponents();

    fixture = TestBed.createComponent(DatosDireccion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
