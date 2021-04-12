import { Request, Response, NextFunction } from "Elucidate/HttpContext";
import HttpResponse from "Elucidate/HttpContext/ResponseType";
import Authenticator from "Elucidate/Auth/Authenticator";

import UserModel from "App/Model/UserModel";

class UserController {
  Auth: Authenticator;
  constructor(Authenticator: Authenticator) {
      this.Auth = Authenticator;
      
  }
  public async index(req: Request, res: Response, next: NextFunction) {
    try {
      await UserModel.query().then(users => {
        HttpResponse.OK(res, users);
      }).catch(err => {
        HttpResponse.NOTFOUND(res, err);
     });
    } catch (error) {
      return next(error);
    }
  }
}

export default UserController;
