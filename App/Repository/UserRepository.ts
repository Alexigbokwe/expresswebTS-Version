import SQLPD_repository from "Elucidate/Repository/SQLPD_repository";
import UserModel from "App/Model/User_model";

class UserRepository extends SQLPD_repository {
  constructor() {
    super(UserModel);
  }
}

export default UserRepository;