import { PlainObject } from '../../libs/types/object-literal.type';
import { ERROR_CODE } from '../../libs/constants/error-codes.enum';

export interface SerializedException {
  message: string;
  code: ERROR_CODE;
  stack?: string;
  metadata?: unknown;
}

export abstract class ExceptionBase extends Error {
  constructor(readonly message: string, readonly metadata?: PlainObject) {
    super(message);
    Error.captureStackTrace(this, this.constructor);
  }
  abstract code: ERROR_CODE;

  /** Enable serialization of Error object (must be used with JSON.stringify)
   * Ex:
   * ... catch(err) {
   *   return JSON.stringify(err);
   * }
   */
  toJSON(): SerializedException {
    return {
      message: this.message,
      code: this.code,
      stack: process.env.NODE_ENV === 'development' ? this.stack : null,
      metadata: this.metadata,
    };
  }
}
