import { PlainObject } from '../../libs/types/object-literal.type';
import { generateHashSync } from '../../libs/utils/hash.util';

export class UserRequest {
  readonly id: string;
  readonly email: string;
  readonly password: string;
  readonly displayName?: string;

  constructor(props: PlainObject) {
    this.id = props.id;
    this.email = props.email;
    this.password = props.password !== undefined ? generateHashSync(props.password) : props.password;
    this.displayName = props.displayName;
  }
}
