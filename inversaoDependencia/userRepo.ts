// class UserRepo
// desc: buscar por usuários no banco de dados

export class UserRepo {
  constructor() { }
  async getUsers(): Promise<User[]> {
    // Usamos Sequelize ou TypeORM para recuperar
    // os usuários de do banco de dados
  }
}