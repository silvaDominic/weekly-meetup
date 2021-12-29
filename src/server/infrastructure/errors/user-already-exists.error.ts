import { ExceptionBase } from './exception-base';
import { ERROR_CODE } from '../../libs/constants/error-codes.enum';

export class UserAlreadyExistsError extends ExceptionBase {
  static readonly message = "User already exists";

  public readonly code = ERROR_CODE.CONFLICT;

  constructor(metadata?: unknown) {
    super(UserAlreadyExistsError.message, metadata);
  }
}
