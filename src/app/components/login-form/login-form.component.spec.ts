import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormComponent } from './login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { UserServiceMock } from 'src/app/services/user.service.mock';
import { By } from '@angular/platform-browser';
import { first } from 'rxjs';

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;
  let userService: UserService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginFormComponent],
      imports: [ReactiveFormsModule],
      providers: [
        {
          provide: UserService,
          useClass: UserServiceMock
        }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LoginFormComponent);
    userService = TestBed.inject(UserService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should login', () => {
    component.form.controls['email'].setValue('test');
    component.form.controls['password'].setValue('test');
    component.form.updateValueAndValidity();

    component.login();

    userService.login(component.form.value)
      .pipe(first())
      .subscribe((value) => {
        expect(value).toBeDefined();
      });
  });
});
