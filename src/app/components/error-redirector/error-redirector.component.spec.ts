import { ComponentFixture, TestBed, waitForAsync, tick, fakeAsync } from '@angular/core/testing';

import { ErrorRedirectorComponent } from './error-redirector.component';
import { EmptyComponentModule } from 'src/app/testing/empty/empty.module';
import { RouterTestingModule } from '@angular/router/testing';
import { EmptyComponent } from 'src/app/testing/empty/empty.component';
import { Router } from '@angular/router';

describe('ErrorRedirectorComponent', () => {
  let component: ErrorRedirectorComponent;
  let fixture: ComponentFixture<ErrorRedirectorComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ErrorRedirectorComponent],
      imports: [
        EmptyComponentModule,
        RouterTestingModule.withRoutes([
          {
            path: '',
            component: EmptyComponent
          }
        ])
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ErrorRedirectorComponent);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should redirect after 5 seconds', fakeAsync((done: DoneFn) => {
    tick(50001);
    expect(router.url).toEqual('/');
    done;
  }));
});
