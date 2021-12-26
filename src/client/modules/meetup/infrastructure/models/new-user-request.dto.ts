export class CreateNewUserRequest {
  readonly email: string;
  readonly password: string;
  readonly displayName?: string;

  constructor(email, password, displayName) {
    this.email = email;
    this.password = password;
    this.displayName = displayName;
  }
}
