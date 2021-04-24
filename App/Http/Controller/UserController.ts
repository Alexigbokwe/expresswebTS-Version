import { Request, Response, NextFunction } from "Elucidate/HttpContext";
import HttpResponse from "Elucidate/HttpContext/ResponseType";

class UserController {
  public async index(req: Request, res: Response, next: NextFunction) {
    try {
      return HttpResponse.OK(res, "alex");
    } catch (error) {
      return next(error);
    }
  }
}

export default UserController;
