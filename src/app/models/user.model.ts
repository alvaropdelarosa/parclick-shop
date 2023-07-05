export class User {
  id: number;
  name: string;
  role: string;
  email: string;
  password: string;
  avatar: string;

  constructor(user: User = {} as any) {
    this.id = user.id;
    this.name = user.name;
    this.role = user.role;
    this.email = user.email;
    this.password = user.password;
    this.avatar = user.avatar;
  }
}