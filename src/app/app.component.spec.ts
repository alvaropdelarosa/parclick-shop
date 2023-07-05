import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { UserService } from './services/user.service';
import { UserServiceMock } from './services/user.service.mock';
import { CategoryService } from './services/category.service';
import { CategoryServiceMock } from './services/category.service.mock';
import { HeaderModule } from './components/header/header.module';
import { BrowserModule, Meta, Title } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { CookieServiceMock } from './services/cookie.service.mock';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let userService: UserService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        HttpClientModule,
        RouterTestingModule.withRoutes([]),
        HeaderModule,
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        {
          provide: CookieService,
          useClass: CookieServiceMock
        },
        {
          provide: UserService,
          useClass: UserServiceMock
        },
        {
          provide: CategoryService,
          useClass: CategoryServiceMock
        },
        {
          provide: Meta
        },
        {
          provide: Title
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService);
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
});
