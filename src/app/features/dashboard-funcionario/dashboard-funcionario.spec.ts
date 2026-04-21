import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosPersonalesComponent } from './dashboard-funcionario';

describe('DashboardFuncionario', () => {
  let component: DatosPersonalesComponent;
  let fixture: ComponentFixture<DatosPersonalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatosPersonalesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DatosPersonalesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
