import { TestBed, inject } from '@angular/core/testing';

import { AddCargaService } from './add-carga.service';

describe('AddCargaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AddCargaService]
    });
  });

  it('should be created', inject([AddCargaService], (service: AddCargaService) => {
    expect(service).toBeTruthy();
  }));
});
