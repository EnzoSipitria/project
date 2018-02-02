import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CeldaPorcentajeComponent } from './celda-porcentaje.component';

describe('CeldaPorcentajeComponent', () => {
  let component: CeldaPorcentajeComponent;
  let fixture: ComponentFixture<CeldaPorcentajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CeldaPorcentajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CeldaPorcentajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
