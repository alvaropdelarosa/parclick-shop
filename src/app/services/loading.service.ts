import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  loading: ReplaySubject<string | null> = new ReplaySubject<string | null>();
  private currentLoading: string | null = null;

  constructor() { }

  setLoadingTrue(): string {
    const uuid = new Date().getMilliseconds().toString();
    this.currentLoading = uuid;
    this.loading.next(uuid);
    return uuid;
  }

  setLoadingFalse(uuid: string) {
    if (this.currentLoading !== uuid) {
      return;
    }

    this.currentLoading = null;
    this.loading.next(null);
  }
}
