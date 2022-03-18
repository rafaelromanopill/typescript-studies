import { UserRepo } from "./userRepo";

// class UserController
// desc Responsável por lidar com solicitações de API para a rota /user

export class UserController {
  private userRepo: UserRepo;

  constructor() {
    this.userRepo = new UserRepo();
  }
  async handleGetUsers(){}
}