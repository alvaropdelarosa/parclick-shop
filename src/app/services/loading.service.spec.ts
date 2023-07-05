import { TestBed } from '@angular/core/testing';

import { LoadingService } from './loading.service';
import { first, last, lastValueFrom, take, takeLast } from 'rxjs';

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
    service.setLoadingTrue();

    service.loading
      .pipe(
        first()
      )
      .subscribe((value: string | null) => {
        expect(value).toBeDefined();
        expect(service.currentLoading).toBeDefined();
      });
  });

  it('should set loading false', () => {
    const loading = service.setLoadingTrue();
    service.setLoadingFalse(loading);

    expect(service.currentLoading).toBeNull();
  });

  it('should not change loading', () => {
    service.currentLoading = '123';
    service.setLoadingFalse('test');

    expect(service.currentLoading).toEqual('123');
  });
});
