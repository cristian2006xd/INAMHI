import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstacionesComponent } from './estaciones';

describe('Estaciones', () => {
  let component: EstacionesComponent;
  let fixture: ComponentFixture<EstacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstacionesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(EstacionesComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
