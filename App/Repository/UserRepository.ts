import SQLPD_Repository from "Elucidate/Repository/SQLPD_repository";
import UserModel from "App/Model/User_model";

class UserRepository extends SQLPD_Repository {
  constructor() {
    super(UserModel);
  }
}

export default UserRepository;
