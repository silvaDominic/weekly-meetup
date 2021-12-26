/**
 * A set of agnostic validators.
 */
import { isEmpty } from "lodash";
import { PlainObject } from '../../../../../../server/libs/types/object-literal.type';

interface IValidator {
  name: string,
  params: string[]
  validator: (value: string, args: string[]) => any,
  message: (fieldName: string, placeholders: PlainObject) => any | string,
}

// Used from: https://gist.github.com/dperini/729294
// Test cases covered at: https://mathiasbynens.be/demo/url-regex under @diegoperini
const URL_REGEX = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;

// Regex used from: https://datatracker.ietf.org/doc/html/rfc2822#section-3.4.1
// Test cases covered at: https://regexr.com/2rhq7
const EMAIL_REGEX = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
/*
// TODO Figure out where 'length' is coming from
export const MIN_LENGTH: IValidator = {
  name: "min-length",
  params: ["length"],
  validator: (value: string, { length }) => value.length >= length,
  message: (fieldName: string, placeholders: PlainObject) => `Must have at least ${placeholders.length} characters.`,
};

// TODO Figure out where 'length' is coming from
export const MAX_LENGTH = {
  name: "max-length",
  params: ["length"],
  validator: (value: string, { length }) => value.length <= length,
  message: (fieldName: string, placeholders: PlainObject) => `Must have no more than ${placeholders.length} characters.`,
}; */

export const URL = {
  name: "url",
  validator: (value: string) => URL_REGEX.test(value),
  message: "Must be a valid url address.",
};

export const EMAIL = {
  name: "email",
  validator: (value: string) => EMAIL_REGEX.test(value),
  message: "Must be a valid email address.",
};

export const REQUIRED = {
  name: "required",
  validator: (value: string) => !isEmpty(value.trim()),
  message: "Field required.",
};

export default {
//  MIN_LENGTH,
//  MAX_LENGTH,
  URL,
  EMAIL,
  REQUIRED,
};

