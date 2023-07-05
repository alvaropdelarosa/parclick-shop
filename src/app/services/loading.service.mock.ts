import { ReplaySubject } from "rxjs";

export class LoadingServiceMock {
  loading: ReplaySubject<string | null> = new ReplaySubject<string | null>();
  currentLoading: string | null = null;

  constructor() {
    this.loading.next(null);
  }

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