import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutComponent } from './checkout.component';
import { DialogModule } from 'primeng/dialog';
import { LoginFormModule } from 'src/app/components/login-form/login-form.module';
import { ErrorRedirectorModule } from 'src/app/components/error-redirector/error-redirector.module';
import { MessageService } from 'primeng/api';
import { Meta, Title } from '@angular/platform-browser';
import { UserService } from 'src/app/services/user.service';
import { UserServiceMock } from 'src/app/services/user.service.mock';
import { ProductService } from 'src/app/services/product.service';
import { ProductServiceMock } from 'src/app/services/product.service.mock';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';

describe('CheckoutComponent', () => {
  let component: CheckoutComponent;
  let fixture: ComponentFixture<CheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CheckoutComponent],
      imports: [
        DialogModule,
        LoginFormModule,
        ErrorRedirectorModule,
        RouterTestingModule.withRoutes([])
      ],
      providers: [
        MessageService,
        Title,
        Meta,
        {
          provide: UserService,
          useClass: UserServiceMock
        },
        {
          provide: ProductService,
          useClass: ProductServiceMock
        },
        {
          provide: ActivatedRoute,
          useValue: {
            params: of(convertToParamMap({ id: 6 })),
            paramMap: of(convertToParamMap({ id: 6 })),
            queryParamMap: of(convertToParamMap({ id: 6 }))
          }
        }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(CheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
