import { TestBed } from '@angular/core/testing';

import { CountriService } from './countri.service';

describe('CountriService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CountriService = TestBed.get(CountriService);
    expect(service).toBeTruthy();
  });
});
