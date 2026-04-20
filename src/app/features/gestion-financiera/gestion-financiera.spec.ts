import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionFinanciera } from './gestion-financiera';

describe('GestionFinanciera', () => {
  let component: GestionFinanciera;
  let fixture: ComponentFixture<GestionFinanciera>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionFinanciera],
    }).compileComponents();

    fixture = TestBed.createComponent(GestionFinanciera);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
