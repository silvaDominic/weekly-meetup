// Models
import { IUserRepository } from '../../domain/models/users/user-repository.interface';
import { UserCredentials } from '../../libs/types/user-credentials.type';

import { ValidationError } from '../../infrastructure/errors/validation-error';
import { UserNotFoundError } from '../../infrastructure/errors/user-not-found.error';
import { compareHashAsync } from '../../libs/utils/hash.util';
import { UserEntity } from '../../domain/models/users/user.entity';

export class LoginUserService {
  userRepository: IUserRepository;

  constructor(userRepository: IUserRepository) {
    this.userRepository = userRepository;
  }

  public async loginUser(credentials: UserCredentials): Promise<UserEntity> {
    // Ensure credentials are valid
    if (!validateUserCredentials(credentials)) {
      throw new ValidationError("Malformed credentials");
    }

    // Check to see if user exists
    const user = await this.userRepository.findUserByEmail(credentials.username);
    if (!user) {
      throw new UserNotFoundError();
    }

    // Check if user password matches
    const match = await compareHashAsync(credentials.password, user.password);
    if (!match) {
      throw new ValidationError("Invalid credentials");
    }

    return user;
  }
}

function validateUserCredentials(credentials: UserCredentials): boolean {
  return !!(credentials.username || credentials.password);
}
