export class CreateNewUserRequest {
  readonly email: string;
  readonly password: string;
  readonly displayName?: string;

  constructor(email: string, password: string, displayName: string) {
    this.email = email;
    this.password = password;
    this.displayName = displayName;
  }
}
