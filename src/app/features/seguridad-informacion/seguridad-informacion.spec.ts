import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeguridadInformacion } from './seguridad-informacion';

describe('SeguridadInformacion', () => {
  let component: SeguridadInformacion;
  let fixture: ComponentFixture<SeguridadInformacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeguridadInformacion],
    }).compileComponents();

    fixture = TestBed.createComponent(SeguridadInformacion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
