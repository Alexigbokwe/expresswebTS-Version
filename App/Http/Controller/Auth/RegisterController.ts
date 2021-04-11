import Hash from "Elucidate/Hashing/Hash";
import FormRequest from "Elucidate/Validator/FormRequest"
import { Request, Response } from "Elucidate/HttpContext";

class RegisterController {
  Auth: any;

  constructor(Auth: any) {
    this.Auth = Auth;
  }

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
    let validation = await this.validator(req.body);
    if (validation.success) {
      return await this.create(req.body, res);
    } else {
      return res.status(404).json(validation);
    }
  };

  /**
   * Get a validator for an incoming registration request.
   * @param {object} record
   * @return Validator
   */
  private async validator(record: object) {
    return await FormRequest.make(record, {
      first_name: "required|string|max:255",
      last_name: "required|string|max:255",
      email: "required|string|email|max:255",
      password: "required|string|min:8",
    });
  }

  /**
   * Create a new user instance after a valid registration.
   * @param {object} data
   * @param {Response} res
   * @return User
   */
  private create = async (data: object, res: Response) => {
    data["password"] = await Hash.make(data["password"]);
    return await this.Auth.createUser(data)
      .then(async (user: object) => {
        let token = await this.Auth.generateToken(user);
        return res.status(200).send({ auth: true, token: token });
      })
      .catch((error: { msg: any; payload: any }) => {
        return res.status(500).send({
          auth: false,
          msg: error.msg,
          error: error.payload,
        });
      });
  };
}

export default RegisterController;
