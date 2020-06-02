import { TestBed, inject } from '@angular/core/testing';

import { FakeObservablesService } from './fake-observables.service';

describe('FakeObservablesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FakeObservablesService]
    });
  });

  it('should be created', inject([FakeObservablesService], (service: FakeObservablesService) => {
    expect(service).toBeTruthy();
  }));
});
