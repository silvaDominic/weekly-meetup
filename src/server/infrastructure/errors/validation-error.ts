import { ExceptionBase } from './exception-base';
import { ERROR_CODE } from '../../libs/constants/error-codes.enum';

export class ValidationError extends ExceptionBase {
  public readonly code = ERROR_CODE.BAD_REQUEST;

  constructor(message: string | string[], metadata?: unknown) {
    super(formatMessage(message), metadata);
  }
}

/**
 * Converts a potential array of string message to a single, line-breaked, string message.
 *
 * NOTE: This may be better suited as a util function that is imported by Error classes that
 * extend this one.
 *
 * @param message
 */
function formatMessage(message: string[] | string): string {
  if (Array.isArray(message)) {
    let result = "";
    message.forEach((msg: string) => {
      result += `${msg}\n`;
    });
    return result;
  }
  return message;
}
