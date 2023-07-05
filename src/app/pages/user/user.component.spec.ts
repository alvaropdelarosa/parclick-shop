import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { FormsModule } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { UserServiceMock } from 'src/app/services/user.service.mock';

describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserComponent],
      imports: [FormsModule],
      providers: [
        {
          provide: UserService,
          useClass: UserServiceMock
        }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
