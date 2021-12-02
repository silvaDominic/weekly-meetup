import * as bcrypt from 'bcrypt';

const SALT_ROUNDS_DEFAULT: number = 12;

export function generateHashSync(value: string, saltRounds: number = SALT_ROUNDS_DEFAULT): string {
  return bcrypt.hashSync(value, saltRounds);
}

export function compareHashSync(value: string, hash: string): boolean {
  return bcrypt.compareSync(value, hash);
}
