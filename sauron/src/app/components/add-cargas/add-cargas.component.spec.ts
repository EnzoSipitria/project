import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCargasComponent } from './add-cargas.component';

describe('AddCargasComponent', () => {
  let component: AddCargasComponent;
  let fixture: ComponentFixture<AddCargasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCargasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCargasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
