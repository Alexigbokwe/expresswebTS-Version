import UserRepository from "App/Repository/UserRepository";
import NOSQLUserRepository from "App/Repository/NoSQLUserRepo";
import IUserService from "./IUserService";

class UserService implements IUserService {
  async nosqlCreatUser(item: object) {
    return await new NOSQLUserRepository()
      .create(item)
      .then((users) => {
        return users;
      })
      .catch((error) => {
        return error;
      });
  }
  async getAllUsers(): Promise<Array<object>> {
    return await new NOSQLUserRepository()
      .getAll(
        { columnName: "_id", order: "desc" },
        { pageNumber: 1, dataSize: 1 },
      )
      .then((users) => {
        return users;
      })
      .catch((error) => {
        return error;
      });
  }

  async getUser(id: number): Promise<object> {
    return await new NOSQLUserRepository()
      .findBy("_id", id)
      .then((user) => {
        return user;
      })
      .catch((error) => {
        return error;
      });
  }

  async saveUser(): Promise<object> {
    return await new UserRepository()
      .create({
        username: "Obinna",
        email: "obinna@yahoo.com",
        password: "alex12345",
      })
      .then((user) => {
        return user;
      })
      .catch((error) => {
        return error;
      });
  }

  async updateUser(id: number, data: object): Promise<object> {
    return await new UserRepository()
      .updateOne(id, data)
      .then((user) => {
        return user;
      })
      .catch((error) => {
        return error;
      });
  }

  async updateUsers(ids: number[], data: object): Promise<boolean> {
    return await new UserRepository()
      .updateMany("id", ids, data)
      .then((user) => {
        return user;
      })
      .catch((error) => {
        return error;
      });
  }
}

export default UserService;
