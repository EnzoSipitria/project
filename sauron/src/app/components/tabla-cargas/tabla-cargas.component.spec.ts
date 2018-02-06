import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaCargasComponent } from './tabla-cargas.component';

describe('TablaCargasComponent', () => {
  let component: TablaCargasComponent;
  let fixture: ComponentFixture<TablaCargasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaCargasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaCargasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
