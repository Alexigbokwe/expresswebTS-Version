import { Request, Response, NextFunction } from "Elucidate/HttpContext";
import HttpResponse from "Elucidate/HttpContext/ResponseType";

import UserModel from "App/Model/User_model";

class UserController {

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
