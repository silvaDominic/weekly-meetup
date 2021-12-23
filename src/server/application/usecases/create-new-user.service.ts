import { ICreateNewUserService } from '../create-new-user.interface';
import { CreateNewUserRequest } from '../dtos/new-user-request.dto';
import { IUserRepository } from '../../domain/models/users/user-repository.interface';
import { UserEntity } from '../../domain/models/users/user.entity';

export class CreateNewUserService implements ICreateNewUserService {
  useRepository: IUserRepository;

  constructor(useRepository: IUserRepository) {
    this.useRepository = useRepository;
  }

  public async createUser(user: CreateNewUserRequest): Promise<UserEntity> {
    return this.useRepository.createUser(user.email, user.password, user.displayName);
  }
}
