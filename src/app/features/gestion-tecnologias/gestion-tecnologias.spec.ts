import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionTecnologias } from './gestion-tecnologias';

describe('GestionTecnologias', () => {
  let component: GestionTecnologias;
  let fixture: ComponentFixture<GestionTecnologias>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionTecnologias],
    }).compileComponents();

    fixture = TestBed.createComponent(GestionTecnologias);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
