import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shape2Page1Component } from './shape2-page1.component';

describe('Shape2Page1Component', () => {
  let component: Shape2Page1Component;
  let fixture: ComponentFixture<Shape2Page1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Shape2Page1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Shape2Page1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
