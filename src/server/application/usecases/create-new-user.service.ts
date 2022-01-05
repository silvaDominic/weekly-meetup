// Models
import { CreateNewUserRequest } from '../dtos/new-user-request.dto';
import { IUserRepository } from '../../domain/models/users/user-repository.interface';
import { UserEntity } from '../../domain/models/users/user.entity';
import { UserAlreadyExistsError } from '../../infrastructure/errors/user-already-exists.error';
import { ValidationError } from '../../infrastructure/errors/validation-error';
// Helpers
import { EMAIL_REGEX } from '../../libs/constants/regex.const';
import { generateHashSync } from '../../libs/utils/hash.util';
import { IValidationResult } from '../validation-result.interface';

export class CreateNewUserService {
  useRepository: IUserRepository;

  constructor(useRepository: IUserRepository) {
    this.useRepository = useRepository;
  }

  public async createUser(user: CreateNewUserRequest): Promise<UserEntity> {
    const validation: IValidationResult = await this.validateUser(user);
    if (!validation.isValid) {
      throw new ValidationError(validation.errors);
    }
    return this.useRepository.createUser(user.email, generateHashSync(user.password), user.displayName);
  }

  /**
   * Validates a new user request and returns a simple
   *
   * @param user
   */
  private async validateUser(user: CreateNewUserRequest): Promise<IValidationResult> {
    let isValid = true;
    const errors: string[] = [];

    if (user.email === undefined || user.email === "") {
      errors.push("Property 'EMAIL' is required.");
    } else if (!EMAIL_REGEX.test(user.email)) {
      errors.push("Property 'EMAIL' must be a valid email");
    }

    // Check if user with current email already exists
    const exists: boolean = await this.useRepository.exists(user.email);
    if (exists) {
      // Exit early as there is not reason to proceed if the user already exists.
      throw new UserAlreadyExistsError();
    }

    if (user.password === undefined || user.password === "") {
      errors.push("Property 'PASSWORD' is required.");
    } else if (user.password.length < 8 || user.password.length > 60) {
      errors.push("Property 'PASSWORD' must be between 8 and 60 characters.");
    }

    if (user.displayName.length && (user.displayName.length < 3 || user.displayName.length > 35)) {
      errors.push("Property 'DISPLAY_NAME' must be between 3 and 35 character.");
    }

    if (errors.length) {
      isValid = false;
    }

    return { isValid, errors };
  }
}
