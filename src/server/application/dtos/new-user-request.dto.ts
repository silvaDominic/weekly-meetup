import { PlainObject } from '../../libs/types/object-literal.type';

export class CreateNewUserRequest {
  readonly email: string;
  readonly password: string;
  readonly displayName?: string;

  constructor(props: PlainObject) {
    this.email = props.email;
    this.password = props.password;
    this.displayName = props.displayName;
  }
}
