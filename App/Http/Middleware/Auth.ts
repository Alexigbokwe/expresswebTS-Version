"use strict";
import Authenticator from "Elucidate/Auth/Authenticator";
import { Request, Response } from "Elucidate/HttpContext";
import { MiddlewareHandler } from "Elucidate/MiddlewareHandler";

class AuthMiddleware extends MiddlewareHandler {
  Auth: Authenticator;
  constructor(Authenticator: Authenticator) {
    super();
    this.Auth = Authenticator;
  }

  override async preHandle(req: Request, res: Response): Promise<boolean> {
    let result = await this.Auth.processAuthMW(req.headers["authorization"]);
    if (result.type == "error") {
      res.send({ auth: false, message: result.msg, payload: result.payload }, 401);
    }

    req.user = result.payload;
    return true;
  }
}

export default AuthMiddleware;
