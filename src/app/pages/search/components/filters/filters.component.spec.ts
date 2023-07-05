import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { FiltersComponent } from './filters.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SliderModule } from 'primeng/slider';
import { By } from '@angular/platform-browser';
import { CategoryService } from 'src/app/services/category.service';
import { CategoryServiceMock } from 'src/app/services/category.service.mock';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { first, of } from 'rxjs';
import { EmptyComponentModule } from 'src/app/testing/empty/empty.module';
import { RouterTestingModule } from '@angular/router/testing';
import { EmptyComponent } from 'src/app/testing/empty/empty.component';
import { SearchProductDto } from 'src/app/models';

describe('FiltersComponent', () => {
  let component: FiltersComponent;
  let fixture: ComponentFixture<FiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FiltersComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        SliderModule,
        EmptyComponentModule,
        RouterTestingModule.withRoutes([
          {
            path: 'products',
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
          provide: ActivatedRoute,
          useValue: {
            paramMap: of(convertToParamMap({
              title: 'Intelligent',
              categoryId: '5'
            })),
            queryParamMap: of(convertToParamMap({
              title: 'Intelligent',
              categoryId: '5'
            }))
          }
        }
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get query params', () => {
    expect(component.filters.title).toBe('Intelligent');
    expect(component.filters.categoryId).toBe('5');
  });

  it('should reset filters', fakeAsync(() => {
    const button = fixture.debugElement.query(By.css('#reset-button')).nativeElement;

    button.dispatchEvent(
      new MouseEvent('click', { relatedTarget: button })
    );

    expect(component.filters.title).toBeUndefined();
    expect(component.filters.price_min).toBeUndefined();
    expect(component.filters.price_max).toBeUndefined();
    expect(component.filters.categoryId).toBeUndefined();
  }));

  it('should update name field', () => {
    const field = fixture.debugElement.query(By.css('input[name="title"]')).nativeElement;
    field.value = 'test';

    field.dispatchEvent(
      new InputEvent('input')
    );

    expect(field.value).toBe(component.form.controls['title'].value);
  });

  it('should update price range', () => {
    component.updateRange([10, 100]);

    expect(component.form.controls['minPrice'].value).toBe('10');
    expect(component.form.controls['maxPrice'].value).toBe('100');
  });

  it('should filter', fakeAsync(() => {
    const expectedEmit = {
      title: 'test',
      price_min: null,
      price_max: null,
      categoryId: '5',
      limit: null,
      offset: null
    } as SearchProductDto;

    spyOn(component.filterChanged, 'emit');

    component.form.controls['title'].setValue('test');

    const button = fixture.debugElement.query(By.css('#filter-button')).nativeElement;

    component.filterChanged.subscribe(next => {
      expect(next).toEqual(expectedEmit);
    });

    button.dispatchEvent(
      new MouseEvent('click', { relatedTarget: button })
    );

    expect(component.filterChanged.emit).toHaveBeenCalled();
  }));
});

describe('FiltersComponentWithoutParams', () => {
  let component: FiltersComponent;
  let fixture: ComponentFixture<FiltersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FiltersComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule,
        SliderModule,
        EmptyComponentModule,
        RouterTestingModule.withRoutes([
          {
            path: 'products',
            component: EmptyComponent
          }
        ])
      ],
      providers: [
        {
          provide: CategoryService,
          useClass: CategoryServiceMock
        },
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should NOT get query params', () => {
    expect(component.filters.title).toBeNull();
    expect(component.filters.categoryId).toBeNull();
    expect(component.filters.price_max).toBeNull();
    expect(component.filters.price_min).toBeNull();
    expect(component.filters.categoryId).toBeNull();
    expect(component.filters.offset).toBe(0);
    expect(component.filters.limit).toBe(0);
  });

  it('should filter WITHOUT params', fakeAsync(() => {
    component.form.controls['title'].setValue('');
    component.form.controls['minPrice'].setValue('');
    component.form.controls['maxPrice'].setValue('');

    const expectedEmit = {
      title: null,
      price_min: null,
      price_max: null,
      categoryId: null,
      limit: null,
      offset: null
    } as SearchProductDto;

    spyOn(component.filterChanged, 'emit');

    const button = fixture.debugElement.query(By.css('#filter-button')).nativeElement;

    component.filterChanged.subscribe(next => {
      expect(next).toEqual(expectedEmit);
    });

    button.dispatchEvent(
      new MouseEvent('click', { relatedTarget: button })
    );

    expect(component.filterChanged.emit).toHaveBeenCalled();
  }));
});
