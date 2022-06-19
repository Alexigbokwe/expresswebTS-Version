"use strict";
import Authenticator from "Elucidate/Auth/Authenticator";
import { Request, Response } from "Elucidate/HttpContext";
import { MiddlewareHandler } from "Elucidate/MiddlewareHandler";

class AuthMiddleware extends MiddlewareHandler {
  constructor(private authenticator: Authenticator) {
    super();
  }

  override async preHandle(req: Request, res: Response): Promise<boolean> {
    let result = await this.authenticator.processAuthMW(req.headers["authorization"]);
    if (result.type == "error") {
      res.send({ auth: false, message: result.msg, payload: result.payload }, 401);
      return false;
    }

    req.user = result.payload;
    return true;
  }
}

export default AuthMiddleware;
