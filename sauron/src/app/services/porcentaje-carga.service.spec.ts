import { TestBed, inject } from '@angular/core/testing';

import { PorcentajeCargaService } from './porcentaje-carga.service';

describe('PorcentajeCargaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PorcentajeCargaService]
    });
  });

  it('should be created', inject([PorcentajeCargaService], (service: PorcentajeCargaService) => {
    expect(service).toBeTruthy();
  }));
});
