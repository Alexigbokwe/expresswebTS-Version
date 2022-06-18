import Hash from "Elucidate/Hashing/Hash";
import { Request, Response } from "Elucidate/HttpContext";
import Authenticator from "Elucidate/Auth/Authenticator";
import { dataType, RegisterValidation } from "App/Http/Validation/RegisterValidation";

class RegisterController {
  constructor(private authenticator: Authenticator) {}

  /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation of their token.
    |
    */
  register = async (req: Request, res: Response) => {
    let validation = await RegisterValidation.validate<dataType>(req.body);
    if (validation.success) {
      return await this.create(validation.data, res);
    } else {
      return res.send({ data: validation, status: false }, 400);
    }
  };

  /**
   * Create a new user instance after a valid registration.
   * @param {object} data
   * @param {Response} res
   * @return User
   */
  private create = async (data: object, res: Response) => {
    data["password"] = await Hash.make(data["password"]);
    return await this.authenticator
      .createUser(data)
      .then(async (user: any) => {
        let token = await this.authenticator.generateToken(user);
        return res.send({ status: true, data: { token } }, 200);
      })
      .catch((err: { msg: any; payload: any }) => {
        return res.send(
          {
            auth: false,
            msg: err.msg,
            error: err.payload,
          },
          401,
        );
      });
  };
}

export default RegisterController;
