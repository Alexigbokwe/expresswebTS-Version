import { Request, Response, NextFunction } from "Elucidate/HttpContext";
import HttpResponse from "Elucidate/HttpContext/ResponseType";
import BookEvent from "App/Events/BooksEvent_event";
import UserModel from "App/Model/User_model";

class UserController {

  public async index(req: Request, res: Response, next: NextFunction) {
    try {
      await new BookEvent("Testing event");
      let users = await UserModel.query();
      return HttpResponse.OK(res, users);
    } catch (error) {
      return next(error);
    }
  }
}

export default UserController;
