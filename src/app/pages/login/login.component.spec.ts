import { UserService } from 'src/app/services/user.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserServiceMock } from 'src/app/services/user.service.mock';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginFormModule } from 'src/app/components/login-form/login-form.module';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule.withRoutes([]),
        LoginFormModule
      ],
      providers: [
        {
          provide: UserService,
          useClass: UserServiceMock
        }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
