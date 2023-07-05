import { TestBed } from '@angular/core/testing';

import { LoadingService } from './loading.service';
import { first } from 'rxjs';

describe('LoadingService', () => {
  let service: LoadingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should set loading true', () => {
    service.setLoading(true);

    service.loading
      .pipe(
        first()
      )
      .subscribe((value: boolean) => {
        expect(value).toBeTruthy();
      });
  });

  it('should set loading false', () => {
    service.setLoading(false);

    service.loading
      .pipe(
        first()
      )
      .subscribe((value: boolean) => {
        expect(value).toBeFalsy();
      });
  });
});
