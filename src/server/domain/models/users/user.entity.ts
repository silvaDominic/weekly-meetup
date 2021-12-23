import { Email } from '../../value-objects/email.value-object';

export class UserEntity {
  id: string;
  email: Email;
  password: string;
  displayName: string;

  constructor(id: string, email: Email, password: string, displayName: string) {
    this.id = id;
    this.email = email;
    this.password = password;
    this.displayName = displayName;
  }
}
