import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionFinancieraComponent } from './gestion-financiera';

describe('GestionFinanciera', () => {
  let component: GestionFinancieraComponent;
  let fixture: ComponentFixture<GestionFinancieraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionFinancieraComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(GestionFinancieraComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
