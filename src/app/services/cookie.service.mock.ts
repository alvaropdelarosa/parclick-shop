
export class CookieServiceMock {
  cookies: { [key: string]: string } = {};


  constructor() {
    this.cookies['cookie'] = 'test';
  }

  get(key: string): string {
    return this.cookies['cookie'];
  }

  set(key: string, value: string): void {
    this.cookies[key] = value;
  }

  deleteAll() {
    this.cookies = {};
  }
}