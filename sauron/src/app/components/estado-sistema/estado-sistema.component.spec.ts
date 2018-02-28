import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadoSistemaComponent } from './estado-sistema.component';

describe('EstadoSistemaComponent', () => {
  let component: EstadoSistemaComponent;
  let fixture: ComponentFixture<EstadoSistemaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadoSistemaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadoSistemaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
