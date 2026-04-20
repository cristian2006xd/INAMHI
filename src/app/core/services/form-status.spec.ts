import { TestBed } from '@angular/core/testing';

import { FormStatus } from './form-status';

describe('FormStatus', () => {
  let service: FormStatus;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormStatus);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
