import { ReplaySubject } from "rxjs";

export class LoadingServiceMock {
  loading: ReplaySubject<boolean> = new ReplaySubject<boolean>();

  constructor() {
    this.loading.next(false);
  }

  setLoading(value: boolean): void {
    this.loading.next(value);
  }
}