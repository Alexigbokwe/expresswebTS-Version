import { Request, Response, NextFunction } from "Elucidate/HttpContext";
import HttpResponse from "Elucidate/HttpContext/ResponseType";
import Authenticator from "Elucidate/Auth/Authenticator";

class UserController {
  Auth: Authenticator;
  constructor(Authenticator: Authenticator) {
      this.Auth = Authenticator;
      
  }
  public index(req: Request, res: Response, next: NextFunction) {
    try {
      HttpResponse.OK(res, 'Alex');
    } catch (error) {
      return next(error);
    }
  }
}

export default UserController;
