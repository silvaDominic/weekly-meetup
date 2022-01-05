import { ExceptionBase } from './exception-base';
import { ERROR_CODE } from '../../libs/constants/error-codes.enum';

export class UserNotFoundError extends ExceptionBase {
  public static readonly message = "User does not exist.";

  public readonly code = ERROR_CODE.UNAUTHORIZED;

  constructor(metadata?: unknown) {
    super(UserNotFoundError.message, metadata);
  }
}
