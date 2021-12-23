import { PlainObject } from '../../libs/types/object-literal.type';
import { generateHashSync } from '../../libs/utils/hash.util';

export class CreateNewUserRequest {
  readonly email: string;
  readonly password: string;
  readonly displayName?: string;

  constructor(props: PlainObject) {
    this.email = props.email;
    this.password = generateHashSync(props.password);
    this.displayName = props.displayName;
  }
}
