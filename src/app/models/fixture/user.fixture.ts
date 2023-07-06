import { User } from "../user.model";

export function createUserFixture(): User {
  return {
    id: 1,
    email: "john@mail.com",
    password: "changeme",
    name: "Jhon",
    role: "admin",
    avatar: "https://picsum.photos/640/640?r=3671"
  };
}

export function createTokenFixture() {
  return {
    access_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTY4ODQ0ODgzMywiZXhwIjoxNjkwMTc2ODMzfQ.sB1RLkfD-RPM2gbS_tr67rBaRcIComibQ9mVYcOk5bg",
    refresh_token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsImlhdCI6MTY4ODQ0ODgzMywiZXhwIjoxNjg4NDg0ODMzfQ._2-irbI9OOaxk4NFiqpwDTjigaUdBwsHJbqz8ipHUeU"
  };
}