import * as bcrypt from 'bcrypt';

const SALT_ROUNDS_DEFAULT: number = 12;

/**
 * Generates hashes SYNCHRONOUSLY.
 * @param value
 * @param saltRounds
 */

export function generateHashSync(value: string, saltRounds: number = SALT_ROUNDS_DEFAULT): string {
  return bcrypt.hashSync(value, saltRounds);
}

/**
 * Compares hashes SYNCHRONOUSLY.
 *
 * @param value
 * @param hash
 */
export function compareHash(value: string, hash: string): boolean {
  return bcrypt.compareSync(value, hash);
}

export function compareHashAsync(value: string, hash: string): Promise<boolean> {
  return bcrypt.compare(value, hash);
}
