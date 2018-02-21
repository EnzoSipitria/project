import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCargaComponent } from './update-carga.component';

describe('UpdateCargaComponent', () => {
  let component: UpdateCargaComponent;
  let fixture: ComponentFixture<UpdateCargaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateCargaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
