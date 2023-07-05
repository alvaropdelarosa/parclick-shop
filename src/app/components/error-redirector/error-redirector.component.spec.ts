import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorRedirectorComponent } from './error-redirector.component';

describe('ErrorRedirectorComponent', () => {
  let component: ErrorRedirectorComponent;
  let fixture: ComponentFixture<ErrorRedirectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorRedirectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ErrorRedirectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
