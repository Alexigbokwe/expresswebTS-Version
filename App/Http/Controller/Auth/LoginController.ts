import { Request, Response } from "Elucidate/HttpContext";
import Authenticator from "Elucidate/Auth/Authenticator";
import { LoginValidation, dataType } from "App/Http/Requests/LoginValidation";

class LoginController {
  constructor(private authenticator: Authenticator) {}
  /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | sends the response with generated token back to the caller.
    |
    */
  login = async (req: Request, res: Response) => {
    let validation = await LoginValidation.validate<dataType>(req.body);
    if (validation.success) {
      return await this.processLogin(validation.data, res);
    } else {
      return res.send({ data: validation, status: false }, 401);
    }
  };

  /**
   * Process incoming login data.
   * @param {object} data
   * @param {Response} res
   * @return User
   */
  private processLogin = async (data: object, res: Response) => {
    return await this.authenticator
      .processLogin(data)
      .then(async (user: object) => {
        let token = await this.authenticator.generateToken(user);
        return res.send({ data: { token }, status: true }, 200);
      })
      .catch((err: { msg: any; payload: any }) => {
        return res.send(
          {
            auth: false,
            msg: err.msg,
            error: err.payload,
          },
          400,
        );
      });
  };
}

export default LoginController;
