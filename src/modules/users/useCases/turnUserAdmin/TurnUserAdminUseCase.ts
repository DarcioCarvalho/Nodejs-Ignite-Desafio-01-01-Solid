import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private usersRepository: IUsersRepository) { }

  execute({ user_id }: IRequest): User {
    // Complete aqui
    const userFound = this.usersRepository.findById(user_id);
    if (!userFound) {
      throw new Error("User does not exist")
    }

    const userAdmin = this.usersRepository.turnAdmin(userFound);
    return userAdmin;
  }
}

export { TurnUserAdminUseCase };
