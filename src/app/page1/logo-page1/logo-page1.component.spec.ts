import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoPage1Component } from './logo-page1.component';

describe('LogoPage1Component', () => {
  let component: LogoPage1Component;
  let fixture: ComponentFixture<LogoPage1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoPage1Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LogoPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
