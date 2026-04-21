import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepcionDocumentosComponent } from './recepcion-documentos';

describe('RecepcionDocumentosComponent', () => {
  let component: RecepcionDocumentosComponent;
  let fixture: ComponentFixture<RecepcionDocumentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecepcionDocumentosComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(RecepcionDocumentosComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
