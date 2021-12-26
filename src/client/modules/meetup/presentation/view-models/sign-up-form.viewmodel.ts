export class SignUpFormVM {
  email: string;
  password: string;
  passwordCheck: string;
  displayName: string;

  constructor(email: string = "", password: string = "", passwordCheck: string = "", displayName: string = "") {
    this.email = email;
    this.password = password;
    this.passwordCheck = passwordCheck;
    this.displayName = displayName;
  }
}
