import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DireccionFinanciera } from './direccion-financiera';

describe('DireccionFinanciera', () => {
  let component: DireccionFinanciera;
  let fixture: ComponentFixture<DireccionFinanciera>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DireccionFinanciera],
    }).compileComponents();

    fixture = TestBed.createComponent(DireccionFinanciera);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
