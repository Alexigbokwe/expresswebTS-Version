import IUserService from "App/Service/User/IUserService";
import { Request, Response, NextFunction } from "Elucidate/HttpContext";
import HttpResponse from "Elucidate/HttpContext/ResponseType";

class UserController {
  protected userService: IUserService;
  constructor(UserService: IUserService) {
    this.userService = UserService;
  }

  public index = async (req: Request, res: Response, next: NextFunction) => {
    try {
      return await this.userService
        .getAllUsers()
        .then((users) => {
          return HttpResponse.OK(res, users);
        })
        .catch((error) => {
          return HttpResponse.EXPECTATION_FAILED(res, error);
        });
    } catch (error) {
      return next(error);
    }
  };

  public show = async (req: Request, res: Response, next: NextFunction) => {
    try {
      return await this.userService
        .getUser(req.params.id)
        .then((users) => {
          return HttpResponse.OK(res, users);
        })
        .catch((error) => {
          return HttpResponse.NOTFOUND(res, error);
        });
    } catch (error) {
      return next(error);
    }
  };

  public update = async (req: Request, res: Response, next: NextFunction) => {
    try {
      let { id, data } = req.body;
      return await this.userService
        .updateUser(id, data)
        .then((user) => {
          return HttpResponse.OK(res, user);
        })
        .catch((error) => {
          return HttpResponse.NOTFOUND(res, error);
        });
    } catch (error) {
      return next(error);
    }
  };

  public updateManyUsers = async (
    req: Request,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      let { ids, data } = req.body;
      return await this.userService
        .updateUsers(ids, data)
        .then((result) => {
          return HttpResponse.OK(res, result);
        })
        .catch((error) => {
          return HttpResponse.NOTFOUND(res, error);
        });
    } catch (error) {
      return next(error);
    }
  };
}

export default UserController;
