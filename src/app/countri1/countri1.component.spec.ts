import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Countri1Component } from './countri1.component';

describe('Countri1Component', () => {
  let component: Countri1Component;
  let fixture: ComponentFixture<Countri1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Countri1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Countri1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
