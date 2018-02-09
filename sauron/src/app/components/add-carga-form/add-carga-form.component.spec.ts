import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCargaFormComponent } from './add-carga-form.component';

describe('AddCargaFormComponent', () => {
  let component: AddCargaFormComponent;
  let fixture: ComponentFixture<AddCargaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCargaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCargaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
