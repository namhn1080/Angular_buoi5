import { TestBed } from '@angular/core/testing';

import { ArcticlesService } from './arcticles.service';

describe('ArcticlesService', () => {
  let service: ArcticlesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArcticlesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
