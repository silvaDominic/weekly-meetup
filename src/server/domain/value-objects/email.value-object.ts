export class Email {
  protected address: string;

  constructor(address: string) {
    this.address = address;
  }

  static format(email: string): string {
    return email.trim().toLowerCase();
  }

  get value(): string {
    return this.address;
  }

  protected validate(address: string): void {
    // Regex used from: https://datatracker.ietf.org/doc/html/rfc2822#section-3.4.1
    // Test cases covered at: https://regexr.com/2rhq7
    // eslint-disable-next-line max-len
    const EMAIL_REGEX = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    const isValid = EMAIL_REGEX.test(address);

    if (!isValid) {
      // throw error
    }
  }
}

