import { UserCredentials } from '../types/user-credentials.type';

/**
 * Parses a base64 encoded Basic Credentials string and returns it as a Credential object
 *
 * @param credentials
 */

export function parseCredentials(credentials: string): UserCredentials {
  if (credentials.length === 0 || !credentials.startsWith("Basic")) {
    throw new Error("Credentials are either empty or not of type 'Basic'.");
  }

  const result: UserCredentials = { username: "", password: "" };

  // Trim white space and remove 'Basic ' prefix from authorization string
  let rawCreds = credentials.trim().replace("Basic ", "");
  // Convert raw credentials (format = username:password) from base64 to utf8
  rawCreds = Buffer.from(rawCreds, "base64").toString();
  // Find index of separator and split credential string at that point.
  const separatorIndex = rawCreds.indexOf(":");
  result.username = rawCreds.substring(0, separatorIndex);
  result.password = rawCreds.substring(separatorIndex + 1);

  return result;
}
