import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosDireccionComponent } from './datos-direccion';

describe('DatosDireccionComponent', () => {
  let component: DatosDireccionComponent;
  let fixture: ComponentFixture<DatosDireccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatosDireccionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DatosDireccionComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
