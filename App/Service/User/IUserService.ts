interface IUserService {
  getAllUsers(): Promise<Array<object>>;
  getUser(id: number): Promise<object>;
  saveUser(): Promise<object>;
  updateUser(id: number, data: object): Promise<object>;
  updateUsers(ids: number[], data: object): Promise<boolean>;
}

export default IUserService;
