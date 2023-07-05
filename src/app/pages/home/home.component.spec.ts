import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { EmptyComponent } from 'src/app/testing/empty/empty.component';
import { RouterTestingModule } from '@angular/router/testing';
import { EmptyComponentModule } from 'src/app/testing/empty/empty.module';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let router: Router;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      imports: [
        EmptyComponentModule,
        FormsModule,
        RouterTestingModule.withRoutes([
          {
            path: 'products',
            component: EmptyComponent
          }
        ])
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    router = TestBed.inject(Router);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should sync input and ngModel', () => {
    const input = fixture.debugElement.query(By.css('input[name="search"]')).nativeElement;
    input.value = 'test';

    input.dispatchEvent(
      new InputEvent('input')
    );

    expect(input.value).toEqual(component.searchValue);
  });

  it('should redirect to search page', fakeAsync(() => {
    const input = fixture.debugElement.query(By.css('input[name="search"]')).nativeElement;
    input.value = 'test';

    input.dispatchEvent(
      new InputEvent('input')
    );

    const button = fixture.debugElement.query(By.css('button')).nativeElement;
    button.dispatchEvent(
      new MouseEvent('click', { relatedTarget: button })
    );

    tick(1);
    expect(router.url).toBe('/products?title=' + input.value);
  }));
});
