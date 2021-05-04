import NOSQLPD_repository from "Elucidate/Repository/NOSQLPD_repository";
import UserModel from "App/Model/NoSQLUser_model";

class NOSQLUserRepository extends NOSQLPD_repository {
  constructor() {
    super(UserModel);
  }
}

export default NOSQLUserRepository;
