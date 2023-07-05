import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NgOptimizedImage } from '@angular/common';
import { CategoryService } from 'src/app/services/category.service';
import { CategoryServiceMock } from 'src/app/services/category.service.mock';
import { UserService } from 'src/app/services/user.service';
import { UserServiceMock } from 'src/app/services/user.service.mock';
import { LoadingService } from 'src/app/services/loading.service';
import { LoadingServiceMock } from 'src/app/services/loading.service.mock';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { EmptyComponentModule } from 'src/app/testing/empty/empty.module';
import { EmptyComponent } from 'src/app/testing/empty/empty.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [
        NgOptimizedImage,
        EmptyComponentModule,
        RouterTestingModule.withRoutes([
          {
            path: 'login',
            component: EmptyComponent
          },
          {
            path: 'user',
            component: EmptyComponent
          }
        ])
      ],
      providers: [
        {
          provide: CategoryService,
          useClass: CategoryServiceMock
        },
        {
          provide: UserService,
          useClass: UserServiceMock
        },
        {
          provide: LoadingService,
          useClass: LoadingServiceMock
        }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to user', fakeAsync(() => {
    const userButton = fixture.debugElement.query(By.css('#userButton')).nativeElement;

    userButton.dispatchEvent(
      new MouseEvent('click', { relatedTarget: userButton })
    );

    expect(component.sideNavVisible).toBeFalsy();
    expect(component.dropdownVisible).toBeFalsy();

    tick(1);
    expect(router.url).toBe('/user');
  }));

  it('should navigate to login', fakeAsync(() => {
    component.user = null;
    const userButton = fixture.debugElement.query(By.css('#userButton')).nativeElement;

    userButton.dispatchEvent(
      new MouseEvent('click', { relatedTarget: userButton })
    );

    expect(component.sideNavVisible).toBeFalsy();
    expect(component.dropdownVisible).toBeFalsy();

    tick(1);
    expect(router.url).toBe('/login');
  }));

  it('should show side nav', () => {
    const button = fixture.debugElement.query(By.css('#side-toggle')).nativeElement;

    button.dispatchEvent(
      new MouseEvent('click', { relatedTarget: button })
    );

    expect(component.sideNavVisible).toBeTruthy();
  });

  it('should show categories dropdown', () => {
    const element = fixture.debugElement.query(By.css('#category-drop')).nativeElement;

    element.dispatchEvent(
      new MouseEvent('click', { relatedTarget: element })
    );

    expect(component.dropdownVisible).toBeTruthy();
  });

});
