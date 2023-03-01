import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextPage1Component } from './text-page1.component';

describe('TextPage1Component', () => {
  let component: TextPage1Component;
  let fixture: ComponentFixture<TextPage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextPage1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
