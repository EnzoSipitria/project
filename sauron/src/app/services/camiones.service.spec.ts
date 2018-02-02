import { TestBed, inject } from '@angular/core/testing';

import { CamionesService } from './camiones.service';

describe('CamionesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CamionesService]
    });
  });

  it('should be created', inject([CamionesService], (service: CamionesService) => {
    expect(service).toBeTruthy();
  }));
});
