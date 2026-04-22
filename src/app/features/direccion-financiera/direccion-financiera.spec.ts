import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DireccionFinancieraComponent } from './direccion-financiera';

describe('DireccionFinanciera', () => {
  let component: DireccionFinancieraComponent;
  let fixture: ComponentFixture<DireccionFinancieraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DireccionFinancieraComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DireccionFinancieraComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
