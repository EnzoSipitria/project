import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullmixComponent } from './fullmix.component';

describe('FullmixComponent', () => {
  let component: FullmixComponent;
  let fixture: ComponentFixture<FullmixComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullmixComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullmixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
